<template>
    <div v-click-outside="onInputBlur">
        <g-input type="text" @focus="onInputFoucs"/>
        <div class="z-date-picker-pop" v-if="popVisible">
            <div class="z-data-picker-nav">
                <span><g-icon name="setting"></g-icon></span>
                <span><g-icon name="setting"></g-icon></span>
                <span @click="onClickYears">2012年</span>
                <span @click="onclickMonth">7月</span>
                <span><g-icon name="setting"></g-icon></span>
                <span><g-icon name="setting"></g-icon></span>
            </div>
            <div class="z-data-picker-panels">
                <div v-if="mode==='years'" class="z-data-picker-content"></div>
                <div v-else-if="mode==='months'" class="z-data-picker-content"></div>
                <div v-else class="z-data-picker-content"></div>
            </div>
            <div class="z-date-picker-actions">

            </div>
        </div>
    </div>
</template>

<script>
    import GInput from "../input"
    import GIcon from "../icon"
    import clickOutside from "../click-outside"
    export default {
        name: "ZBDatePicker",
        components:{
          GInput,
          GIcon
        },
        directives:{
          clickOutside
        },
        data(){
            return {
                popVisible:false,
                mode:"days"
            }
        },
        methods:{
            onInputFoucs(){
                this.popVisible=true
            },
            onInputBlur(){
                this.popVisible=false
            },
            onClickYears(){
                this.mode="years"
            },
            onclickMonth(){
                this.mode="months"
            }

        }
    }
</script>

<style lang="scss" scoped>
    .z-data-picker-nav{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>