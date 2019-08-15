import Login from '@/components/Login.vue';
import MainMenu from '@/components/MainMenu.vue';
import Absen from '@/components/Absen.vue';
import Approval from '@/components/Approval.vue';
import IzinCuti from '@/components/IzinCuti.vue';
import ApproveCuti from '@/components/ApproveCuti.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/mainmenu', component: MainMenu },
    { path: '/absen', component: Absen },
    { path: '/approval', component: Approval },
    { path: '/izincuti', component: IzinCuti },
    { path: '/approvecuti', component: ApproveCuti },
];

export default routes;