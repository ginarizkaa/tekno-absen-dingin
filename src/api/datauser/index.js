import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {
    getEmployeeById(window, idEmployee){
        return getApiNoAuth()
        .get('DataUsers/'+idEmployee)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    getDataBySpv(window, idSpv){
        return getApiNoAuth()
        .get('DataUsers/getDataBySpv?idSpv='+idSpv)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
}