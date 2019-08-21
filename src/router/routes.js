import Login from '@/components/Login.vue';
import MainMenu from '@/components/MainMenu.vue';
import Absen from '@/components/Absen.vue';
import Approval from '@/components/Approval.vue';
import IzinCuti from '@/components/IzinCuti.vue';
import ApproveCuti from '@/components/ApproveCuti.vue';
import Status from '@/components/Status.vue';
import StatusCuti from '@/components/StatusCuti.vue';
import StatusPagi from '@/components/StatusPagi.vue';
import StatusPulang from '@/components/StatusPulang.vue';
import Map from '@/components/Map.vue';

const routes = [
    { path: '/', component: Login, name: 'home' },
    { path: '/mainmenu', component: MainMenu, name: 'mainmenu' },
    { path: '/absen', component: Absen, name: 'absen' },
    { path: '/approval', component: Approval, name: 'approval' },
    { path: '/izincuti', component: IzinCuti, name: 'izincuti' },
    { path: '/approvecuti', component: ApproveCuti, name: 'approvecuti' },
    { path: '/status', component: Status, name: 'status' },
    { path: '/statuspagi', component: StatusPagi, name: 'statuspagi' },
    { path: '/statuspulang', component: StatusPulang, name: 'statuspulang' },
    { path: '/statuscuti', component: StatusCuti, name: 'statuscuti' },
    { path: '/map', component: Map, name: 'map' },
    { path: '/map/:lat,:long', component: Map, name: 'map2', props: true},

];

export default routes;