import { createRouter, createWebHistory } from "vue-router";
import NewForm from "../formbuilder/NewForm";
import ShowAllForms from "../views/ShowAllForms.vue";
import DesignForm from "../views/DesignForm.vue";
import PublishForm from "../views/PublishForm.vue";
import ResponseForm from "../views/ResponseForm.vue";
import CreateForm from "../views/CreateForm.vue";
import SendEmail from "../views/SendEmail.vue";
import ControllerLogin from "../views/ControllerLogin.vue";
import BackupPublishForm from "../views/BackupPublishForm.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: NewForm,
      redirect: "/login",
    },
    {
path:'/login',
component:ControllerLogin
    },
    {
      path: "/forms",
      component: CreateForm,
      name: "create-form",
      // beforeEnter(to, from, next) {
      //   console.log("users beforeEnter");
      //   console.log(to, from);
      //   console.log(to.params.formProtection);
      //   // if (to.params.formProtection !== undefined) {
      //   //   next();
      //   // } else {
      //   //   next(false);
      //   // }
      //   next()
      // },
    },
    {
      path: "/form-design/:title,:level,:formtype,:password",
      component: DesignForm,
      name: "form-design",
      // beforeEnter(to, from, next) {
      //   console.log("users before");
      //   console.log(to, from);
      //   console.log('formdesign',to.params.formProtection);
         
      //   if (to.params.title !== undefined) {
      //     next();
      //   } else {
      //     next('/');
      //   }
      // },
    },
    // {
    //   path: "/form-design/",
    //   redirect: "/forms",
    // },
    {
      path: "/publish/:formId",
      component: PublishForm,
      name: "publish-form",
      props:true,
      beforeEnter(to, from, next) {
        console.log("users beforeEnter");
        console.log(to, from);
        if (to.params.formProtection !== 'undefined') {
              next();
            } else {
              next(false);
            }
        // next();
      },
    },
    { path: "/Response", component: ResponseForm, name: "response-forms" },
    {
      path: "/form",
      component: ShowAllForms,
      name: "show-all-forms",
      props: { items: "newElements" },
    },
    {
      path: "/sendmail/:formId",
      component: SendEmail,
      name: "send-email",
      props:true,
    },
    {
      path:'/publishform/:formId',
      component:BackupPublishForm,
      name:"public-form"
    },
    {
      path:"/:pathMatch(.*)*",
      redirect:"/login"
    },
  ],
});
// router.beforeEach(function(to, from, next) {
//   console.log('Global beforeEach');
//   console.log(to, from);
//   if (to.params.formProtection !== 'undefined') {
//     next();
//   } else {
//     next(false);
//   }

// });
export default router;
