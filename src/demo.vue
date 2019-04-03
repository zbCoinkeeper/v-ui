<template>
    <div>
        <g-button icon="setting">你好</g-button>
        <g-input/>
        <g-button loading >你好</g-button>
        
    </div>
</template>

<script>
    import  Button from "./button"
    import  Icon from "./icon"
    import  GInput from "./input"
    export default {
        name: "demo",
        components:{
            GButton:Button,
            GIcon:Icon,
            GInput
        },

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