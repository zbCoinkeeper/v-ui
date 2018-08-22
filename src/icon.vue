<template>
     <svg class="g-icon" aria-hidden="true">
            <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default{
        props:['name']
    }
</script>


<style lang="scss" scoped>
    .g-icon{
            width: 1em;
            height: 1em;
        }
</style>
