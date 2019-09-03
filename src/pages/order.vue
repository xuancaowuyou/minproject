<template>
    <div>
       <mt-spinner type="snake" color="#26a2ff"></mt-spinner>
       <tabbar :selected="selected" ></tabbar>
    </div>
</template>
<script>
import tabbar from '@/components/tabbar'
export default {
    name:'order',
    data() {
        return {
        selected: "order"
        };
    },
    components:{
        tabbar
    }
}
</script>
<style scoped>

</style>