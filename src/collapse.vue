<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue"
    const eventBus=new Vue()
    export default {
        name: "collapse",
        data(){
            return {
                eventBus:eventBus,
            }
        },
        props:{
            single:{
                type:Boolean,
                default:false,
            },
            selected:{
                type:Array,
            },
        },

        provide:{
            eventBus:eventBus
        },
        mounted(){
            this.eventBus.$emit("update:selected",this.selected)
            this.eventBus.$on("add:selected",(name)=>{
                let tempSelected=JSON.parse(JSON.stringify(this.selected))
                if(this.single){
                    tempSelected=[name]
                }else{
                    tempSelected.push(name)
                }
                this.eventBus.$emit("update:selected",tempSelected)
                this.$emit("update:selected",tempSelected)
            })

            this.eventBus.$on("remove:selected",(name)=>{
                let tempSelected=JSON.parse(JSON.stringify(this.selected))
                let index=tempSelected.indexOf(name)
                tempSelected.splice(index,1)
                this.eventBus.$emit("update:selected",tempSelected)
                this.$emit("update:selected",tempSelected)
            })
        }

    }
</script>

<style scoped lang="scss">
    .collapse{
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>