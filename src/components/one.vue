<template>
    <div class="one" id="one">
        {{msg}}
        <p>{{this.$route.params.id}}</p>
        <button @click="gotoTwo">to Two</button>
    </div>
</template>
<script>
import bus from '@/assets/bus.js'
export default {
    data(){
        return {
            msg:'one',
            currentTime:'2019-5-17'
        }
    },
    methods:{
        gotoTwo(){            
            this.$router.push('/two')
        }
    },
    beforeCreate () {
    console.group('%c%s', 'color:blue', 'beforeCreate 创建前状态===============组件1》')
    },
    created () {   
    console.group('%c%s', 'color:blue', 'created 创建完毕状态===============组件1》')
    },
    beforeMount () {
    console.group('%c%s', 'color:blue', 'beforeMount 挂载前状态===============组件1》')
    },
    mounted () {
    console.group('%c%s', 'color:blue', 'mounted 挂载状态===============组件1》')
    },
    beforeUpdate () {
    console.group('%c%s', 'color:blue', 'beforeUpdate 更新前状态===============组件1》')
    },
    updated () {
    console.group('%c%s', 'color:blue', 'updated 更新状态===============组件1》')
    },
    beforeDestroy () {
        bus.$emit('child-message',this.currentTime);
    console.group('%c%s', 'color:blue', 'beforeDestroy 破前状态===============组件1》')
    },
    destroyed () {
    console.group('%c%s', 'color:blue', 'destroyed 破坏状态===============组件1》')
    }
}
</script>
<style scoped>

</style>
