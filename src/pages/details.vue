<template>
    <div class="details">
        <mt-header title="商品详情" fixed>
            <router-link to="/home" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div>
            <img class="det_img" :src="this.$route.query.src"/>
            <p>{{this.$route.query.title}}</p>
            <p class="price">￥{{this.$route.query.price}}</p>
        </div>      
        <input type="text" class="search" v-model="keywords">   
        <ul v-if="keywords">
            <li v-for="(stu, index) in searchList(keywords)" :key="index">
                name:{{stu.name}}
            </li>
        </ul> 
        
    </div>     
</template>
<script>

import bus from '@/assets/bus.js'
export default {
    data(){
        return {
            price:'',
            keywords:'',
            students: [
                {name: '张三', sex: '女', age: 19, phone: '18921212121'},
                {name: '李四', sex: '男', age: 29, phone: '18921221121'},
                {name: '王五', sex: '女', age: 39, phone: '18921788721'},
                {name: '赵六', sex: '男', age: 49, phone: '18921556121'},
                {name: '李四', sex: '男', age: 29, phone: '18921221121'},
                {name: '王五', sex: '女', age: 39, phone: '18921788721'},
                {name: '李四', sex: '男', age: 29, phone: '18921221121'},
                {name: '王五', sex: '女', age: 39, phone: '18921788721'},
                {name: '王五', sex: '女', age: 39, phone: '18921788721'},
                {name: '赵六', sex: '男', age: 49, phone: '18921556121'},
                {name: '李思思', sex: '男', age: 29, phone: '18921221121'},
                {name: '张三', sex: '女', age: 19, phone: '18921212121'},
                {name: '李四', sex: '男', age: 29, phone: '18921221121'},
                {name: '王五', sex: '女', age: 39, phone: '18921788721'},
                {name: '赵六', sex: '男', age: 49, phone: '18921556121'},
                {name: '李四', sex: '男', age: 29, phone: '18921221121'},
                {name: '王五', sex: '女', age: 39, phone: '18921788721'},
                {name: '李四', sex: '男', age: 29, phone: '18921221121'},
                {name: '王五', sex: '女', age: 39, phone: '18921788721'},
                {name: '王五', sex: '女', age: 39, phone: '18921788721'},
                {name: '赵六', sex: '男', age: 49, phone: '18921556121'},
                {name: '李五五', sex: '男', age: 29, phone: '18921221121'}
            ]
        }
    },
    created(){
        //let that = this;
        // bus.$on("goodsmsgfn",function(data){
        //     that.goods = data;
        // });       
    },
    methods: {
        // 数组
        searchList(keyWords){
            return this.students.filter((student)=>{
                    if(student.name.includes(keyWords)){
                        return student;
                    }
            });
        }
    }
}
</script>
<style scoped>
.det_img{
    width:100%;
}
.price{
    color:#ff0000;
}
.swipe_box{
    height:300px;
    background:#fafafa;
}
</style>
