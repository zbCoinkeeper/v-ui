<template>
    <div class="collapse-item">
        <div class="title" @click="open=!open">
            {{title}}
        </div>
        <div class="content" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collapseitem.vue",
        props:{
            title:{
                require:true,
                type:String,
            }
        },
        data(){
           return {
               open:false
           }
        }
    }
</script>

<style scoped lang="scss">
  .collapse-item{
     .title{
         border: 1px solid #ddd;
         margin-top:-1px;
         margin-left:-1px;
         margin-right:-1px;
         min-height: 32px;
         display: flex;
         align-items: center;
         padding: 0 8px;
     }
     &:first-child{
         .title{
            border-top-left-radius: 4px;
             border-top-right-radius: 4px;
         }
     }
     &:last-child{
         .title:last-child{
             border-bottom-left-radius: 4px;
             border-bottom-right-radius: 4px;
         }
     }
  }
</style>