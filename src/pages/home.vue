<template>
    <div class="bg_color">
        <mt-header fixed title="固定在顶部"></mt-header>
        <ul class="content">
            <list v-for="item in goods" :key="item.id" :todo="item" @gotodetail ='detailfn'></list>
        </ul>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="首页">
                <img slot="icon" v-show="!(selected==='首页')" src="../assets/home_icon.png">
                <img slot="icon" v-show="selected==='首页'" src="../assets/home_icon_selected.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon"  v-show="!(selected==='订单')" src="../assets/order_icon.png">
                <img slot="icon" v-show="selected==='订单'" src="../assets/order_icon_selected.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" v-show="!(selected==='发现')" src="../assets/find_icon.png">
                <img slot="icon" v-show="selected==='发现'" src="../assets/find_icon_selected.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon"  v-show="!(selected==='我的')" src="../assets/person_icon.png">
                <img slot="icon" v-show="selected==='我的'" src="../assets/person_icon_selected.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import list from '@/components/list'
import bus from '@/assets/bus.js'
export default {
    data(){
        return{
            selected:'首页',
            "goods": [
                { "id":0,"price": "69.9", "title": "德芙", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t3688/270/776223567/128582/fa074fb3/58170f6dN6b9a12bf.jpg!q50.jpg.webp" },
                { "id":1,"price": "63", "title": "费列罗", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t613/100/1264998035/221234/1a29d51f/54c34525Nb4f6581c.jpg!q50.jpg.webp"},
                { "id":2,"price": "29.9", "title": "大米", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t1258/40/17387560/108696/aced445f/54e011deN3ae867ae.jpg!q50.jpg.webp"},
                { "id":3, "price": "54.9", "title": "安慕希", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2734/15/680373407/215934/3abaa748/572057daNc09b5da7.jpg!q50.jpg.webp"},
                { "id":4,"price": "58", "title": "金典", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2482/145/1424008556/91991/d62f5454/569f47a2N3f763060.jpg!q50.jpg.webp"},
                { "id":5,"price": "60", "title": "味可滋", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2368/3/874563950/70786/7b5e8edd/563074c8N4d535db4.jpg!q50.jpg.webp" },
                { "id":6, "price": "248.00", "title": "泸州老窖", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t283/166/1424018055/189580/7c0792b7/543b4958N05fa2feb.jpg!q50.jpg.webp"},
                { "id":7,"price": "328.8", "title": "剑南春", "img": "http://m.360buyimg.com/babel/s350x350_g15/M05/1A/0A/rBEhWlNeLAwIAAAAAAHyok3PZY0AAMl8gO8My0AAfK6307.jpg!q50.jpg.webp"},
                { "id":8,"price": "49.00", "title": "蓝莓", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2332/148/2952098628/94387/e64654e2/56f8d76aNb088c2ab.jpg!q50.jpg.webp" },
                { "id":9,"price": "68", "title": "芒果", "img": "http://m.360buyimg.com/n0/jfs/t3709/334/1378702984/206759/5c100ab5/58253588Naaa05c5c.jpg!q70.jpg"}
            ]
        }
    },
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
            // this.$router.push({
            //     name:'one',
            //     params:{
            //         id:id
            //     }
            // })
        }
    },
    components:{
        list
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        // click后打印出当前mt-tab-item的id
      }
    },
    created:function(){
        // this.axios.get('http://localhost:801/goodlist.json')
        // .then(function(res){
        //     console.log(res)
        // }).catch(function(err){
        //     console.log(err)
        // })
    },
    beforeDestroy(){
        //bus.$emit('goodsmsgfn',this.goods)        
    }
}
</script>
<style scoped>
.bg_color{
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width:100%;
    height:100%;
    background:#eee;
    z-index: -1;
    overflow:hidden;
}
.content{
    width:100%;
    height:100%;
    padding:40px 0px 55px;
    box-sizing:border-box;
    overflow:auto;
}
</style>
