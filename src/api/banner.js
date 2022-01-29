import {request} from '@/utils/request'

export const banner = () => {
    return request({
        method: 'get',
        url: '/banner?type=0'
    })
}

export const recommendList = () => {
    return request({
        method: 'get',
        url: '/personalized?limit=10'
    })
}

export const getNews = () => {
    return request({
        method: 'get',
        url: '/personalized/newsong'
    })
}

export const newsMV = () => {
    return request({
        method: 'get',
        url:'/mv/first?limit=8'
    })
}

// 歌单分类
export const categoryCD = () => {
    return request({
        method: 'get',
        url: '/top/playlist'
    })
}