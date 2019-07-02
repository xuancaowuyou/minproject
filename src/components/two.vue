<template>
    <div class="two" id="two">
        {{msg}} -{{itime}}       
    </div>
</template>
<script>
import bus from '@/assets/bus.js'
export default {
    data(){
        return {
            msg:'我是 two',
            itime:'22'
        }
    },
    computed:{

    },
    beforeCreate () {
    console.group('%c%s', 'color:red', 'beforeCreate 创建前状态===============组件2》')
    },
    created () {
        let _this = this;
        bus.$on('child-message',function(data){
             _this.itime = data;
        });
    console.group('%c%s', 'color:red', 'created 创建完毕状态===============组件2》')
    },
    beforeMount () {
    console.group('%c%s', 'color:red', 'beforeMount 挂载前状态===============组件2》')
    },
    mounted () {
    console.group('%c%s', 'color:red', 'mounted 挂载状态===============组件2》')
    },
    beforeUpdate () {
    console.group('%c%s', 'color:red', 'beforeUpdate 更新前状态===============组件2》')
    },
    updated () {
    console.group('%c%s', 'color:red', 'updated 更新状态===============组件2》')
    },
    beforeDestroy () {
        bus.$off('child-message')
    console.group('%c%s', 'color:red', 'beforeDestroy 破前状态===============组件2》')
    },
    destroyed () {
    console.group('%c%s', 'color:red', 'destroyed 破坏状态===============组件2》')
    }
}
</script>
<style scoped>

</style>
