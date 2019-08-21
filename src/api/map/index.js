import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiMap} from '../utils'

Vue.use(VueResource)

export default {

    // get detail include employee
    getDetailLok(window){
        return getApiMap()
        .get('reverse?format=jsonv2&lat=-6.2241337&lon=106.8410232')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    
}