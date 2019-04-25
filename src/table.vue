<template>
    <div>
       <thead>
         <tr>
            <th></th>
            <th></th>
         </tr>
       </thead>
        <tbody>
             <tr>
               <td></td>
               <td></td>
             </tr>
             <tr>
                 <td></td>
                 <td></td>
             </tr>
       </tbody>
    </div>
</template>

<script>
    export default {
        name: "table",
        props:{
            columns:{
                type:Array,
                required:true,
            },
            dataSource:{
                type:Array,
                required:true
            }
        }
    }
</script>

<style scoped lang="scss">

</style>