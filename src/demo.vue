<template>
    <div>
        <g-date-picker></g-date-picker>
    </div>
</template>

<script>
    import  Button from "./button/button"
    import  Icon from "./icon"
    import  GInput from "./input"
    import  GPagination from "./pagination"
    import  GSticky from "./sticky"
    import  GDatePicker from "./data-picker/data-picker"
        export default {
            name: "demo",
            components:{
                GButton:Button,
                GIcon:Icon,
                GInput,
                GPagination,
                GSticky,
                GDatePicker
            },
            data(){
                return {

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