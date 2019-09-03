import axios from 'axios'

const API_URL = 'http://192.168.4.49:3000/api/';
const API_URL_MAP = 'https://nominatim.openstreetmap.org/';

export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'COntent-Type': 'application/json'
        }
    })
}

export function getApiMap(){
    return axios.create({
        baseURL: API_URL_MAP,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Credentials' : false,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Content-Type': 'application/json' 
        }
    })
}

export function getApi(token, params){
    if(params){ params.access_token = token } else {
        params = {
            access_token: token
        }
    }
    return axios.create({
        baseURL: API_URL,
        timeout: 100000,
        withCredentials: true,
        params: params,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}