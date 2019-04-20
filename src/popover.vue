<template>
    <div class="gulu-popover">
        <div class="gulu-popover-content-wrapper" v-if="isPop">
            <slot name="content"></slot>
        </div>
        <div class="gulu-popover-trigger" @click="ontrigger">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popover",
        data(){
            return{
                isPop:false
            }
        },
        methods:{
            ontrigger(){
                this.isPop=!this.isPop
            }
        }
    }
</script>

<style scoped lang="scss">
    .gulu-popover{
        display: inline-flex;
        vertical-align: top;
        position: relative;
        &-content-wrapper{
            position: absolute;
            left: 0;
            bottom: 100%;
            box-shadow: 0 0 3px rgba(0,0,0,0.5);
            border: 1px solid red;
        }
    }
</style>