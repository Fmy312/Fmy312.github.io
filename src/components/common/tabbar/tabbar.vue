<template>
    <div class="tap-bar">
    <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar',
}
</script>

<style>
.tap-bar{
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 1px  rgba(100, 100, 100, 0.15) ;
    z-index:9 ;
}
</style>