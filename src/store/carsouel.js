import { defineStore } from "pinia";
import {banner, recommendList, getNews, newsMV, categoryCD} from '@/api/banner'

export const useCarsouelStore = defineStore('carsouel',{
    state: () => ({
        banner: [],
        // 推荐歌单
        recommendLists: [],
        // 最新歌曲
        news: [],
        // 最新MV
        nextMV: [],
        // 歌单分类
        catList:[]
    }),
    actions: {
        async getBanner() {
            const {data} = await banner()
            this.banner = data.banners
        },
        async getRecommnedList() {
            const {data} = await recommendList()
            this.recommendLists = data.result
        },
        async getNews() {
            const { data } = await getNews()
            this.news = data.result
        },
        async getNewsMV() {
            const { data } = await newsMV()
            this.nextMV = data.data
        },
        async getCD() {
            const { data } = await categoryCD()
            this.catList = data
        }
    },
    getters: {
        
    }
})