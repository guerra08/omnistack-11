import axios from 'axios'

const api = axios.create({
    baseURL: 'http://ew-3g8.anonymous.mobile.exp.direct:80'
})

export default api