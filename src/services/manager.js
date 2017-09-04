import axios from 'axios';


export function getitems() {
    return axios.get(`http://localhost:3002/api/get`).then(res => res.data)
}

export function addToCartList(id) {
    return axios.post(`http://localhost:3002/api/post/${id}`).then(res => res.data)
}

export function getinfo(id) {
    return axios.get(`http://localhost:3002/api/getInfo/${id}`).then(res => res.data)
}

export function removeBought(id) {
    return axios.delete(`http://localhost:3002/api/delete/${id}`).then(res => res)
}