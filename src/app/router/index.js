import { createRouter, createWebHistory } from 'vue-router';
import NewForm from "../formbuilder/NewForm"
import ShowAllForms from "../views/ShowAllForms.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: NewForm },
        { path: '/form', component: ShowAllForms,name:"show-all-forms",props:{ items:"newElements"} },
         


    ]
});

export default router