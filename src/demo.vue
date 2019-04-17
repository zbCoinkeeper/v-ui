<template>
    <div>
        <g-collapse  :selected.sync="selected">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        {{selected}}
    </div>
</template>

<script>
    import  Button from "./button/button"
    import  Icon from "./icon"
    import  GInput from "./input"
    import  GPagination from "./pagination"
    import  GSticky from "./sticky"
    import  GDatePicker from "./data-picker/data-picker"
    import  GCollapse from "./collapse"
    import  GCollapseItem from "./collapse-item"
        export default {
            name: "demo",
            components:{
                GButton:Button,
                GIcon:Icon,
                GInput,
                GPagination,
                GSticky,
                GDatePicker,
                GCollapse,
                GCollapseItem
            },
            data(){
                return {
                    selected:["1","2"]
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