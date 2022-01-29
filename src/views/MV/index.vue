<template>
<Header></Header>
</template>

<script setup>
import { useMvStore } from '../../store/Mv';
import { storeToRefs } from 'pinia';
import Header from '@/components/Header'
import {components, onMounted} from 'vue'

const {getMV} = useMvStore()
const {mv} = storeToRefs(useMvStore())

components:{Header};
onMounted(()=>{
    getMV()
})
</script>

<style lang='scss' scoped>
 
</style>
