<template>
<Header></Header>
</template>

<script setup>
import Header from '@/components/Header'
import {components, onMounted} from 'vue'
import {storeToRefs} from 'pinia'
import { useCarsouelStore } from "@/store/carsouel";

const {getCD }  = useCarsouelStore()
const {catList} = storeToRefs(useCarsouelStore())

components:{Header}
onMounted(()=>{
    getCD()
})
</script>

<style lang='scss' scoped>
 
</style>
