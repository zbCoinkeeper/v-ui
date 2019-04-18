<template>
    <div class="gulu-pager">
        <span v-for="page in pages" class="gulu-pager-item"
            :class="{'active':page===currentPage,'separator':page==='...'}"
        >
            {{page}}
        </span>
    </div>
</template>

<script>
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
        data(){
            let pages=[1,this.totalPages,this.currentPage,this.currentPage-1,this.currentPage+1,this.currentPage+2,this.currentPage-2]
            let uniquePages=this.unique(pages.sort((a,b)=>a-b))
            let tempArr=[]
            let allPages=uniquePages.reduce((pre,cur,index,arr)=>{
                tempArr.push(cur)
                if(uniquePages[index+1]!==undefined&&uniquePages[index+1]-uniquePages[index]>1){
                    tempArr.push("...")
                }
                return tempArr
            },tempArr)
            return {
                pages:allPages
            }
        },
        methods:{
            unique(array){
                return [...new Set(array)]
            }
        }

    }
</script>

<style scoped lang="scss">
    .gulu-pager{
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
         &.separator{
             border: none;
         }
         &.active,&:hover{
            border-color: #999;
         }
         &.active{
             cursor: default;
         }
        }
    }
</style>