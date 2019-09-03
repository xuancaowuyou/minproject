<template>
    <div>
        <mt-button size="small" :class="iChoose1 ? 'choose':''" @click.native='tabClick(1)'>tab1</mt-button>
        <mt-button size="small" :class="iChoose2 ? 'choose':''"  @click.native='tabClick(2)'>tab2</mt-button>
        <mt-button size="small" :class="iChoose3 ? 'choose':''" @click.native='tabClick(3)'>tab3</mt-button>
       <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
            <mt-cell v-for="n in 10" :key="n" title="tab-container 1">{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
            <mt-cell v-for="n in 5" :key="n" title="tab-container 2">{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
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
            active:'tab-container1',
            iChoose1:true,
            iChoose2:false,
            iChoose3:false,
            selected: "find"
        };
    },
    components:{
        tabbar
    },
    methods:{
        tabClick(num){
            this.active ='tab-container'+num;
            switch (num) {
                case 1:
                    this.iChoose1=true;
                    this.iChoose2=false;
                    this.iChoose3=false;
                break;
                case 2:
                    this.iChoose1=false;
                    this.iChoose2=true;
                    this.iChoose3=false;
                break;
                case 3:
                    this.iChoose1=false;
                    this.iChoose2=false;
                    this.iChoose3=true;
                break;
            }
        }
    }
}
</script>
<style scoped>
.choose{
    background:#26a2ff;
    color:#fff;
}
</style>