import request from '@/utils/request'


export function getMsg() {
    return request({
        url: "/masteel/getMsg",
        method: "get"
    });
}

export function findAll() {
    return request({
        url: "/dept/findAll",
        method: "get"
    });
}