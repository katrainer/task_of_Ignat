import axios from "axios";

const instatce = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

export const RequestAPI = {
    checkbox(success: boolean) {
        return instatce.post('auth/test', {success}).then(data => data)
    },
}

