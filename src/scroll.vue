<template>
    <div ref="parent" class="gulu-scroll-wrapper">
       <div ref="child" class="gulu-scroll">
         <slot></slot>
       </div>
       <div class="gulu-scroll-track">
          <div class="gulu-scroll-bar">
              <div class="gulu-scroll-bar-inner">

              </div>
          </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "scroll",
        methods:{
            calculateContentYMax(){
              let {borderTopWidth,borderBottomWidth,paddingTop,paddingBottom}=getComputedStyle(this.$refs.parent)
              borderTopWidth=parseInt(borderTopWidth)
              borderBottomWidth=parseInt(borderBottomWidth)
              paddingTop=parseInt(paddingTop)
              paddingBottom=parseInt(paddingBottom)
              let maxHeight=this.childHeight-this.parentHeigth+(borderTopWidth+borderBottomWidth+paddingTop+paddingBottom)
              return maxHeight
            },
        },
        mounted(){

        }

    }
</script>

<style scoped lang="scss">
    .gulu-scroll-wrapper{
        border: 1px solid red;
        overflow: hidden;
        position: relative;
       .gulu-scroll{
           transition: transfrom ease 0.05s;
       }
       .gulu-scroll-track{
           position: absolute;
           height: 100%;
           width:14px;
           top:0;
           right:0;
           background-color: #fafafa;
           border-left:1px solid #e8e7e8;
       }
       .gulu-scroll-bar{
           position: absolute;
           top:-1px;
           left:50%;
           margin-left:-4px;
           width:8px;
           border-radius: 4px;
           height: 30px;
           padding: 4px 0;
           &-inner{
               height: 100%;
               background-color:#c2c2c2;
               border-radius: 4px;
               &:hover{
                   background-color: #7D7d7d;
               }
           }
       }
    }

</style>