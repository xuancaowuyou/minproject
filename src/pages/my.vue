<template>
    <div>
        <mt-cell title="标题文字"></mt-cell>
        <mt-cell title="标题文字" value="说明文字"></mt-cell>
        <tabbar :selected="selected" ></tabbar>
    </div>
</template>
<script>
import tabbar from '@/components/tabbar'
export default {
    name:'my',
    data() {
        return {
            selected: "my"
        };
    },
    components:{
        tabbar
    }
}
</script>
<style scoped>

</style>