import axios from '@/utils/request';

export default function getList(data) {
    return axios({
        url: '/ssr',
        method: 'post',
        data: data,
    })
}