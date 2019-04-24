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

            },
            onClosePopover(){

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