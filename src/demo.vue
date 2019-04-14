<template>


 <div>
     <p>1</p>
     <p>1</p> <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>



     <g-sticky>1111111</g-sticky>

     <p>1</p>

     <p>1</p> <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p> <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p> <p>1</p>
     <p>1</p>
     <p>1</p>
     <p>1</p>



 </div>












</template>

<script>
    import  Button from "./button/button"
    import  Icon from "./icon"
    import  GInput from "./input"
    import  GPagination from "./pagination"
    import  GSticky from "./sticky"
        export default {
            name: "demo",
            components:{
                GButton:Button,
                GIcon:Icon,
                GInput,
                GPagination,
                GSticky
            },
            data(){
                return {
                    loading1:true
                }
            }
        }
</script>

<style lang="scss" scoped>
    $border-color-hover: #666;
    $border-color: #999;
    $border-radius: 4px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $font-size: 12px;
    $red: #F1453D;
    $height: 32px;
</style>