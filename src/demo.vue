<template>
    <div class="wrapper">

    </div>
</template>

<script>
    import  Button from "./button/button"
    import  Icon from "./icon"
    import  GInput from "./input"
    import  GSticky from "./sticky"
    import  GDatePicker from "./data-picker/data-picker"
    import  GCollapse from "./collapse"
    import  GCollapseItem from "./collapse-item"
    import GPager from "./pager"
    import GPopover from "./popover"
    import GTable from "./table"
        export default {
            name: "demo",
            components:{
                GButton:Button,
                GIcon:Icon,
                GInput,
                GSticky,
                GDatePicker,
                GCollapse,
                GCollapseItem,
                GPager,
                GPopover,
                GTable
            },
            data(){
                return {
                    currentPage:1

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

<style>
    *{
        box-sizing:border-box;
    }
    .wrapper{
        margin: 50px;
    }
</style>