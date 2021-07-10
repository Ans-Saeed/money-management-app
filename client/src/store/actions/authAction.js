//Axious is need for communicated the server
import Axios from 'axios'
import * as Types from './types'


//we using the thunk library for using assinconus task
export const register = users => dispath => {
    Axios.post('/api/users/register/', users)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
}