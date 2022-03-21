import { createRouter, createWebHistory } from 'vue-router';
import NewForm from "../formbuilder/NewForm"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: NewForm },
         


    ]
});

export default router