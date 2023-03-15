import request from '@/utils/request'


export function findByDeptId(deptId) {
    return request({
        url: "/enter/findByDeptId",
        method: "get",
        params: { deptId }
    });
}

export function findById(id) {
    return request({
        url: "/enter/findById",
        method: "get",
        params: { id }
    });
}

export function add(data) {
    return request({
        url: "/enter/add",
        method: "post",
        data
    });
}

export function modify(data) {
    return request({
        url: "/enter/modify",
        method: "post",
        data
    });
}

export function deleteById(id) {
    return request({
        url: "/enter/deleteById",
        method: "get",
        params: { id }
    });
} 

