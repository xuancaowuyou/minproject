<template>
    <ul class="list">
        <li class="list_item"  v-for="item in goods" :key="item.id"  @click="detailfn(item.id)">
            <img :src="item.img"/>
            <p>
                <span class="item_title">{{item.title}}</span>
                <span class="item_price">￥{{item.price}}</span>  
            </p>            
        </li>
    </ul>    
</template>
<script>
export default {
    props:['goods'],
    methods:{
        detailfn:function(id){
            let src = this.goods[id].img
            let title = this.goods[id].title
            let price = this.goods[id].price
            this.$router.push({
                path:'/details',
                query:{
                    src:src,
                    title:title,
                    price:price
                }
            });
        }
    },
    created(){
        console.log()
    }
}
</script>
<style scoped>
.list{
    width:100%;
    height:100%;
    padding:46px 0px 55px;
    box-sizing:border-box;
    overflow:auto;
}
.list_item{    
    display:inline-block;
    width:47%; 
    background:#fff;  
    box-sizing:border-box;  
    font-size:14px;
}
.list_item:nth-child(2n){
    margin:0px 2% 2% 1%;     
}
.list_item:nth-child(2n+1){
    margin:0px 1% 2% 2%; 
}
.list_item img{
    width:100%;    
}
.list_item p{
    display:flex;
    flex-direction: row;
    line-height:24px;
    padding:5px 10px;
}
.list_item span{
    display:inline-block;
    width:50%;
}
.item_title{
    text-align:left;
}
.item_price{
    color:#ff0000;
    text-align:right;
}
</style>
