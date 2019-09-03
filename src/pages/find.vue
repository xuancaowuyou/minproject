<template>
    <div>
        <mt-navbar v-model="active" class="mg_bottom3">
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
        <mt-cell title="当前选中" :value="active"></mt-cell>
        <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item id="1">
            <mt-cell v-for="n in 10" :key="n" title="tab-container 1">{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <mt-cell v-for="n in 5" :key="n" title="tab-container 2">{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            <mt-cell v-for="n in 7" :key="n" title="tab-container 3">{{n}}</mt-cell>
        </mt-tab-container-item>
        </mt-tab-container>
       <tabbar :selected="selected" ></tabbar>
    </div>
</template>
<script>
import tabbar from '@/components/tabbar'
export default {
    name:'find',
    data() {
        return {            
            active:'1',
            selected: "find"
        };
    },
    components:{
        tabbar
    },
    methods:{
    }
}
</script>
<style scoped>
.choose{
    background:#26a2ff;
    color:#fff;
}
.mg_bottom3{
    margin-bottom:3px;
}
</style>