import axios from 'axios';


export function getitems() {
    return axios.get(`http://localhost:3002/image/${id}`).then(res => res.data)
}

export function removeBought(id) {
    return axios.delete(`http://localhost:3002/image/${id}`)
}