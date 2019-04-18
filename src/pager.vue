<template>
    <div>
        <span v-for="page in pages">{{page}}</span>
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

<style scoped>

</style>