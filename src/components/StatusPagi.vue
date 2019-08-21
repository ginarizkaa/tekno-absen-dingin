<template>
    <div>
        <h6 style="text-align:center;">Status Absen Pagi</h6> 
        <div class="flex flex-center">
            <table class="table" width="20%" height="200px">
                <div v-for="data in dataAbsensiToday" :key="data.id">
                    <div v-if="data.keterangan=='datang'">
                    <tr>
                        <td> Waktu Datang </td>
                        <td> : </td>
                        <td> {{data.date}} </td>
                    </tr>
                    <tr>
                        <td> Status</td>
                        <td> : </td>
                        <td> {{data.status}} </td>
                    </tr>
                    <tr>
                        <td> Lokasi</td>
                        <td> : </td>
                        <td> Lihat </td>
                    </tr>
                    </div>
                    <div v-if="data.keterangan=='pulang'">

                    <tr>
                        <td> Waktu Datang </td>
                        <td> : </td>
                        <td> {{data.date}} </td>
                    </tr>
                    <tr>
                        <td> Status</td>
                        <td> : </td>
                        <td> {{data.status}} </td>
                    </tr>
                    <tr>
                        <td> Lokasi</td>
                        <td> : </td>
                        <td> Lihat </td>
                    </tr>
                    </div>
                    
                </div>
                
            </table>
        </div>
    </div>
</template>
<style>
</style>
<script>
import absensi_api from '../api/absensi/index'

export default {
    data () {
        return {
            dataAbsensiToday:[]
        }
    },

    beforeCreate(){
        let self = this;
        let idEmployeeX = self.$ls.get("userNow")

        absensi_api
            .getTodayEmployee(window, idEmployeeX)
            .then(function(res) {
                self.dataAbsensiToday = res;
                return res;
            })
            .catch(function(err) {
                console.log(err);
            });    
  }
}
</script>