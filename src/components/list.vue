<template>
    <li class="list_item"   @click="goDetails(todo.id)">
        <img :src="todo.img"/>
        <p>
            <span class="item_title">{{todo.title}}</span>
            <span class="item_price">￥{{todo.price}}</span>  
        </p>            
    </li>
</template>
<script>
export default {
    props:['todo'],
    methods:{
        goDetails(index){
            this.$emit("gotodetail",index);
        }
    }
}
</script>
<style scoped>
.list{
    margin-top:8px;
    width:100%;
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
