<template>
  <div class="adminLogin">
    <!-- <header-nav /> -->
    <div class="adminLoginBlock">
      <div
        class="d-flex justify-content-center align-items-center adminLoginForm"
      >
        <div class="col col-sm-6 col-md-5 col-lg-4" style="z-index: 9">
          <!-- <img
            class="rounded mx-auto d-block"
            src="../../../../assets/imgs/admin/adminLogo.png"
          /> -->
          <h2 class="text-center">Controller Login</h2>
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            v-slot="{ errors }"
          >
            <div class="mb-3">
              <label for="userName" class="form-label">Username</label>
              <Field
                name="userName"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.userName }"
                placeholder="Enter User Name"
              ></Field>
              <div class="invalid-feedback">{{ errors.userName }}</div>
            </div>
            <div class="mb-3">
              <label for="passwordProtection" class="form-label">Password</label>
              <Field
              name="passwordProtection"
              type="password"
              class="form-control"
              placeholder="Enter Password"
              :class="{ 'is-invalid': errors.passwordProtection }"
            />
            <div class="invalid-feedback">{{ errors.passwordProtection }}</div>
              <!-- <Field
                type="hidden"
                id="roleId"
                name="roleId"
              /> -->
            </div>
            <div class="d-flex">
              <div class="d-flex flex-grow-1">
                <a href="/admin/forget-password">Forget Password</a>
              </div>
            </div>
            <div class="d-flex gap-4 justify-content-center">
              <button class="solidBtn">Login</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import HeaderNav from "../../../shared/components/HeaderNav.vue";
import adminService from "../services/adminService"; 
// import { mapMutations } from "vuex"; 
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

export default {
  setup() {
    // const toast = useToast();
    return {  };
  },
  data() {
    const schema = Yup.object().shape({
      userName: Yup.string().required("UserName is required"),
      passwordProtection: Yup.string().required("Password is required")
    });
    return {
      
        schema,
        username: null,
        password: null,
        roleId: null,
      
    };
  },
  components: {
     Form,Field,
  },
  methods: {
     
   onSubmit(values) {
      const body = {
        username:values.userName,
        password:values.passwordProtection,
        roleId:1
      };
    //   this.showLoading(true);
      adminService
        .authenticateController(body)
        .then((response) => {
        //   this.showLoading(false);
          if (response.data.status == false) {
            this.toast.error(response.data.message);
          } else {
           
            localStorage.setItem("jwtToken", response.data.JwtToken);
            localStorage.setItem("RefreshToken", response.data.RefreshToken);
            localStorage.setItem("userName", response.data.Email);

            this.$router.push({
              name: "create-form",
     
      params: { controllerId:response.data.Id },
            });
          }
        })
        .catch((error) => {
          this.toast.error("Something went wrong", error.message);
        });
    },
  },
//   mounted() {
//     if (localStorage.getItem("jwtToken")) {
//       this.$router.push("/admin/dashboard");
//     }
//   },
};
</script>
<style scoped>
.adminLoginForm {
  height: calc(100vh - 80px);
  /* background-image: url("../../../../assets/imgs/admin/backImg.jpg"); */
  background-size: cover;
}
.adminLoginForm > div {
  background: linear-gradient(
    0deg,
    rgba(225, 216, 227, 1) 0%,
    rgba(184, 182, 211, 1) 100%
  );
  padding: 35px;
  border-radius: 7px;
}
.adminLoginForm:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #7c7b99;
  z-index: 0;
  opacity: 0.7;
}
.form-label,
.inputValue {
  font-size: 1.4rem;
  color: var(--primary-color);
  font-family: roboto-slab;
}
input[type] {
  height: 40px;
  border-radius: 7px;
  border: 1px solid var(--primary-color);
}
</style>