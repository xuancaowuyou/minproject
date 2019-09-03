<template>
    <div>
       order
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