<template>
  <mt-tabbar v-model="message">
    <mt-tab-item id="home"  >
        <img slot="icon" v-show="!('/home'==$route.path)" src="../assets/home_icon.png">
        <img slot="icon" v-show="'/home'==$route.path" src="../assets/home_icon_selected.png">
        首页
    </mt-tab-item>
    <mt-tab-item id="order"  >
        <img slot="icon"  v-show="!('/order'==$route.path)" src="../assets/order_icon.png">
        <img slot="icon" v-show="'/order'==$route.path" src="../assets/order_icon_selected.png">
        订单
    </mt-tab-item>
    <mt-tab-item id="find"  >
        <img slot="icon" v-show="!('/find'==$route.path)" src="../assets/find_icon.png">
        <img slot="icon" v-show="'/find'==$route.path" src="../assets/find_icon_selected.png">
        发现
    </mt-tab-item>
    <mt-tab-item id="my" >
        <img slot="icon"  v-show="!('/my'==$route.path)" src="../assets/person_icon.png">
        <img slot="icon" v-show="'/my'==$route.path" src="../assets/person_icon_selected.png">
        我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
export default {
    data(){
    return{
    //选中的tabbar值message为外面页面传入的值selected
      message:this.selected?this.selected:'home',
    }
  },
  props:['selected'], 
  watch: {
    message: function(val, oldVal) {
         console.log(this,this.$route.path)
      switch (val) {
        case "home":
          this.$router.push("/home");
          break;
        case "order":
          this.$router.push("/order");
          break;
        case "find":
          this.$router.push("/find");
          break;
        case "my":
          this.$router.push("/my");
          break;
      }
    }
  }
};
</script>
<style>
</style>