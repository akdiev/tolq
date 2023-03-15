import Axios from 'axios'


import _actions from '../controllers/redux/actions'
import { initializeStore } from '../controllers/redux/Store'

/**
 * @dev TLDR; import createAxiosInstance from 'lib/axios' and call await createAxiosInstance() 
 * to get an axios instance with the bearer token set.
 * Because the bearer token is saved in redux, we need to first fetch the token then 
 * instantiate and return new axios instance with the Bearer token set. In this case, axios
 * instance is a promise, so we cannot use it directly. We need to await it.
 * 
 * @returns {AxiosInstance}
 */
async function createAxiosInstance() {

    const state = await initializeStore().getState()
    const session = state.auth.payload
    
    const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }

    if(session){
        headers['Authorization'] = `Bearer ${session.token}`
    }
    
    const instance = Axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: headers
    });
    
    return instance;
}

export default createAxiosInstance;