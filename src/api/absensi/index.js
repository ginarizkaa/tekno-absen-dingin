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
    }
}