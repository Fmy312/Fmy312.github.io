<template>
<div class="toast" v-show="show">
    <span>{{ msg }}</span>
</div>
</template>

<script>
export default {
    name: "Toast",
    data() {
        return {
            msg:'',
            show:false
        }
    },
    methods:{
        isShow(message='默认文字',duration=2000){
            this.show=true;
            this.msg=message;
            setTimeout(()=>{
                this.show=false;
            },duration)
        }
    }
}
</script>

<style scoped>
.toast {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 14px;
text-align: center;
padding: 10px 25px;
border-radius: 15px;
background-color: rgba(0, 0, 0, 0.6);
color: #fff;
z-index: 999;
}
</style>