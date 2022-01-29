import { request } from '@/utils/request'

export const categoryMv = () => {
    return request({
        method: 'get',
        url: '/mv/all'
    })
}