<template>
    <div class="gulu-pager">
        <span class="gulu-pager-nav pre" :class="{'disabled':currentPage===1}" @click="onchangepage(currentPage-1)">
            <g-icon name="left"></g-icon>
        </span>
        <template v-for="page in pages">
            <template v-if="page ===currentPage">
                <span  class="gulu-pager-item active">
                  {{page}}
                </span>
            </template>
            <template v-else-if="page==='...'">
                <g-icon name="dots" class="gulu-pager-separator"></g-icon>
            </template>
            <template v-else>
                 <span  class="gulu-pager-item" @click="onchangepage(page)">
                    {{page}}
                 </span>
            </template>
        </template>
        <span class="gulu-pager-nav next" :class="{'disabled':currentPage===totalPages}" @click="onchangepage(currentPage+1)">
            <g-icon name="right"></g-icon>
        </span>
    </div>
</template>

<script>
    import GIcon from "./icon"
    export default {
        name: "pager",
        props:{
          currentPage:{
              require:true,
              type:Number,
          },
          totalPages:{
              require:true,
              type:Number,
          },
          hideIfOnePage:{
             type:Boolean,
             default:true,
          }
        },
        components:{
            GIcon
        },
        computed:{
            pages(){
                let pages=[1,this.totalPages,this.currentPage,this.currentPage-1,this.currentPage+1,this.currentPage+2,this.currentPage-2]
                let uniquePages=this.unique(pages.sort((a,b)=>a-b)).filter((item)=>{
                    return item>=1&&item<=this.totalPages
                })
                let tempArr=[]
                let allPages=uniquePages.reduce((pre,cur,index,arr)=>{
                    tempArr.push(cur)
                    if(uniquePages[index+1]!==undefined&&uniquePages[index+1]-uniquePages[index]>1){
                        tempArr.push("...")
                    }
                    return tempArr
                },tempArr)
                return allPages
              }
        },
        methods:{
            unique(array){
                return [...new Set(array)]
            },
            onchangepage(page){
                if(page>=1&&page<=this.totalPages){
                    this.$emit("update:currentPage",page)
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    .gulu-pager{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        user-select: none;
        &.hide{
            display: none;
        }
        &-item{
            border: 1px solid #eee;
            border-radius: 4px;
            padding: 0 4px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size:12px;
            height: 20px;
            min-width:20px;
            margin: 0 4px;
            cursor: pointer;
         &-separator{
            padding: 0 4px;
            font-size:12px;
         }
         &.active,&:hover{
            border-color: #999;
         }
         &.active{
             cursor: default;
         }
        }
        &-nav{
            margin: 0 4px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background: #ddd;
            height: 20px;
            width: 20px;
            border-radius: 4px;
            font-size:12px;
            &.disabled{
               svg{
                   fill:darken(#ddd,30%)
               }
            }
        }
    }
</style>