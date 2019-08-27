import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {
    getAllDataCuti(window){
        return getApiNoAuth()
        .get('DataCutis')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    postDataCuti(window, param){
        return getApiNoAuth()
        .post('DataCutis', param)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    
    getDetailCuti(window){
        return getApiNoAuth()
        .get('DataCutis?filter=%7B%22include%22%3A%5B%22DataEmployee%22%2C%22DataJenisCuti%22%2C%22DataAsesor%22%5D%7D')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    putStatus(window, idIzinCuti, param){
        return getApiNoAuth()
        .put('DataCutis/'+idIzinCuti, param)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    getDataCutiBySpv(window, idSpv){
        return getApiNoAuth()
        .get('DataCutis/getDataCutiBySpv?idSpv='+idSpv)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
}