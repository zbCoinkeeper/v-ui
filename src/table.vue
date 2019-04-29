<template>
    <div>
       <thead>
         <tr>
            <template v-for="column in columns">
                <th>{{column.name}}</th>
            </template>>
         </tr>
       </thead>
       <tbody>
             <template v-for="data in dataSource">
                 <tr>
                     <td v-for="column in columns">{{}}</td>
                 </tr>
             </template>
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