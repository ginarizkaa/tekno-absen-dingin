import Login from '@/components/Login.vue';
import MainMenu from '@/components/MainMenu.vue';
import Absen from '@/components/Absen.vue';
import Approval from '@/components/Approval.vue';
import IzinCuti from '@/components/IzinCuti.vue';
import ApproveCuti from '@/components/ApproveCuti.vue';
import Status from '@/components/Status.vue';

const routes = [
    { path: '/', component: Login, name: 'home' },
    { path: '/mainmenu', component: MainMenu, name: 'mainmenu' },
    { path: '/absen', component: Absen, name: 'absen' },
    { path: '/approval', component: Approval, name: 'approval' },
    { path: '/izincuti', component: IzinCuti, name: 'izincuti' },
    { path: '/approvecuti', component: ApproveCuti, name: 'approvecuti' },
    { path: '/status', component: Status, name: 'status' },
];

export default routes;