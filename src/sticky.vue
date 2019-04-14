<template>
    <div class="gulu-sticky" ref="wrapper" :class="classes">
        <div class="gulu-sticky-inner">
            <slot></slot>
        </div>

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
            let top=this.top()
            window.addEventListener("scroll",()=>{
                if(window.scrollY>top){
                    this.sticky=true

                }else{
                    this.sticky=false

                }
            })
        },
        created(){

        },
        methods:{
          top(){
            let {top}=this.$refs.wrapper.getBoundingClientRect()
              return top+window.scrollY
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