<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
      <g-icon class="loading icon" name="loading" v-if="loading"/>
      <g-icon class="icon" v-if="icon && !loading" :name="icon"/>
      <div class="content">
            <slot></slot>
      </div>
    </button>
</template>

<script>
import Icon from './icon'
export default {
   components:{
       'g-icon':Icon
   },
  //props:['icon','iconPosition']
  props: {
    icon:{},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        //if(value!=="left"&&value!=="right"){
        //    return false
        //}else{
        //    return true
        //}简化写法
        return value === "left" || value === "right";
      }
    },
    loading:{
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "var";
    .g-button { font-size: $font-size; height: $button-height; padding: 0 1em;
        border-radius: $border-radius; border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;
        &:hover { border-color: $border-color-hover; }
        &:active { background-color: $button-active-bg; }
        &:focus { outline: none; }
        > .g-button-content { order: 2; }
        > .icon { order: 1; margin-right: .1em; }
        &.icon-right {
            > .g-button-content { order: 1; }
            > .icon { order: 2; margin-right: 0; margin-left: .1em;}
        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }

</style>
