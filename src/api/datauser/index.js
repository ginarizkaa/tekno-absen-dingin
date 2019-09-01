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

    //{"include":"DataSpv"}
    getDetailUser(window){
        return getApiNoAuth()
        .get('DataUsers?filter=%7B%22include%22%3A%22DataSpv%22%7D')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    postDataUser(window, param){
        return getApiNoAuth()
        .post('DataUsers', param)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    deleteDataUser(window, idEmployee){
        return getApiNoAuth()
        .delete('DataUsers/'+idEmployee)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    putDataUser(window, param){
        return getApiNoAuth()
        .put('DataUsers', param)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
}