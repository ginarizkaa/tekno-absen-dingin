import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {
    getAllAbsen(window){
        return getApiNoAuth()
        .get('DataAbsensis')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    postAbsen(window, param){
        return getApiNoAuth()
        .post('DataAbsensis', param)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    //{"include":["DataEmployee", "DataAsesor"]}
    getDetailAbsen(window){
        return getApiNoAuth()
        .get('DataAbsensis?filter=%7B%22include%22%3A%20%5B%22DataEmployee%22%2C%20%22DataAsesor%22%5D%7D')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    
    putStatus(window, idAbsen, param){
        return getApiNoAuth()
        .put('DataAbsensis/'+idAbsen, param)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    getToday(window){
        return getApiNoAuth()
        .get('DataAbsensis/getToday')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    getTodayEmployee(window, idEmployee){
        return getApiNoAuth()
        .get('DataAbsensis/getTodayEmployee?idEmployee='+idEmployee)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    getTodayBySpv(window, idSpv){
        return getApiNoAuth()
        .get('DataAbsensis/getTodayBySpv?idSpv='+idSpv)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    deleteDataAbsen(window, idEmployee){
        return getApiNoAuth()
        .delete('DataAbsensis/'+idEmployee)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}