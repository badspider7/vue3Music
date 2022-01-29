import { defineStore } from "pinia";
import {categoryMv} from '@/api/MV'

export const useMvStore = defineStore('mv', {
    state: () => {
        mv:[]
    },
    actions: {
        async getMV() {
            const data = await categoryMv()
            this.mv = data
        }
    },
    getters: {
        
    }
})