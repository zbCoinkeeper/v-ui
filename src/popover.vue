<template>
    <div class="gulu-popover" v-click-outside="onClosePopover">
        <div ref="content-wrapper" class="gulu-popover-content-wrapper" v-if="isPop">
            <slot name="content"></slot>
        </div>
        <div ref="trigger" class="gulu-popover-trigger" @click="ontrigger">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import ClickOutside from "./click-outside"
    export default {
        name: "popover",
        data(){
            return{
                isPop:false
            }
        },
        directives:{
          ClickOutside
        },
        methods:{
            ontrigger(){
                this.isPop=!this.isPop
                if(!this.isPop){
                    console.log("关闭")
                }else{
                    this.$nextTick(()=>{
                        console.log(this.$refs.contentWrapper)
                        this.$refs.contentWrapper.style.left=window.screenX+this.$refs.trigger.left;
                        this.$refs.contentWrapper.style.top=window.screenY+this.$refs.trigger.top;
                    })
                }
            },
            onClosePopover(){
                this.isPop=false
            }
        }
    }
</script>

<style scoped lang="scss">
    .gulu-popover{
        display: inline-flex;
        vertical-align: top;
        position: relative;

    }
    &-content-wrapper{
        position: absolute;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        border: 1px solid red;
    }
</style>