<template>
     <svg class="g-icon" aria-hidden="true">
            <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    export default{
        props:['name']
    }
</script>


<style lang="scss">
    .g-icon{
            width: 1em;
            height: 1em;
        }
</style>
