<template>
    <g-button class="xxx">1111</g-button>
</template>

<script>
    import  Button from "./button"
    import  Icon from "./icon"
    export default {
        name: "demo",
        components:{
            GButton:Button,
            GIcon:Icon
        }
    }
</script>

<style  scoped>
    .xxx{
        border: 1px solid red;
    }
</style>