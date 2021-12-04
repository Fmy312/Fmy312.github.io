<template>
    <div class="checkbutton" :class="{checked:ischecked}">
        <img src="~assets/images/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name:'CheckButton',
    props:{
        ischecked:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>
.checkbutton{
    border-radius: 50%;
    color: #fff;
    border:2px solid #aaa;
    
}
.checked{
    border-color: red;
    background-color: red;
}
</style>