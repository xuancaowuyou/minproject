<template>
    <div @click="open">{{message}}</div>
</template>
<script>
export default {
    props:['message'],
    methods:{
        open(){
            this.$emit('showbox','changed')
        }
    }
}
</script>
<style scoped>

</style>

