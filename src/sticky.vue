<template>
    <div class="gulu-sticky" ref="wrapper" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sticky.vue",
        data(){
            return {
                sticky: false
            }
        },
        mounted(){

        },
        created(){
            window.addEventListener("scroll",()=>{
                if(this.top()<=0){
                    this.sticky=true
                    console.log("11111")
                }else{
                    this.sticky=false
                    console.log("22222")
                }
            })
        },
        methods:{
          top(){
            let {top}=this.$refs.wrapper.getBoundingClientRect()
              console.log(top)
            return top
          }
        },
        computed:{
            classes(){
                return {
                    sticky:this.sticky
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .gulu-sticky{
        border: 1px solid red;
        &.sticky{
            position: fixed;
            top:0;
            width: 100%;
        }
    }


</style>