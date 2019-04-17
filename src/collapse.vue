<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "collapse"
    }
</script>

<style scoped lang="scss">
    .collapse{
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>