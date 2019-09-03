<template>
    <div class="details">
        <mt-header title="商品详情" fixed>
            <router-link to="/home" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="det_box">
            <img class="det_img" :src="this.$route.query.src"/>
            <p>{{this.$route.query.title}}</p>
            <p class="price">￥{{this.$route.query.price}}</p>
        </div>  
    </div>     
</template>
<script>
import bus from '@/assets/bus.js'
export default {
    data(){
        return {
            price:''            
       }   
    }
}
</script>
<style scoped>
.det_box{
    margin-top:40px;
}
.det_img{
    width:80%;
}
.price{
    color:#ff0000;
}
.swipe_box{
    height:300px;
    background:#fafafa;
}
</style>
