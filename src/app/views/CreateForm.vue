<template>
  <controller-header />
  <div class="newCreateForm">
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <div class="newCreateFormBlock">
        <div class="newCreateFormFild">
          <label for="formTitle" class="form-label">Title</label>
          <Field
            name="formTitle"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.formTitle }"
            placeholder="Ente Form Title"
          ></Field>
          <div class="invalid-feedback">{{ errors.formTitle }}</div>
        </div>
        <div class="newCreateFormFild">
          <label for="chooseLevel" class="form-label"
            >Verification Level of Data Subject</label
          >
          <Field
            name="chooseLevel"
            as="select"
            class="form-control"
            :class="{ 'is-invalid': errors.chooseLevel }"
          >
            <option value="">Choose Varification Level</option>
            <option value="level1">Email <span>(level 1)</span></option>
            <option value="level2">Email,Mobile</option>
            <option value="level3">Email,Mobile,Address</option>
          </Field>
          <div class="invalid-feedback">{{ errors.chooseLevel }}</div>
        </div>
      </div>
      <div class="newCreateFormBlock">
        <div class="newCreateFormFild">
          <label for="formType" class="form-label">Form Type</label>
          <Field
            name="formType"
            as="select"
            class="form-control"
            :class="{ 'is-invalid': errors.formType }"
          >
            <option value="">Choose Form Type</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </Field>
          <div class="invalid-feedback">{{ errors.formType }}</div>
        </div>
        <div class="newCreateFormFild">
          <div>
            <p>Password Protection</p>
            <input
              type="checkbox"
              id="passwordProtect"
              aria-describedby="passwordProtect"
              v-model="enablePassword"
              class="meze-3"
            />
            <label for="passwordProtect" class="form-label"
              >Enable Password Protection</label
            >
          </div>
          <div v-if="enablePassword">
            <Field
              name="passwordProtection"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.passwordProtection }"
            />
            <div class="invalid-feedback">{{ errors.passwordProtection }}</div>
          </div>
        </div>
      </div>

      <div class="form-group text-center">
        <button type="submit" class="primarybuttonStyle me-4">Register</button>
        <button type="reset" class="btn btn-secondary">Reset</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import ControllerHeader from "./ControllerHeader.vue";
// import * as CryptoJS form ("ccrypto-js")
  // const CryptoJS = require("crypto-js")
export default {

  components: { ControllerHeader, Form, Field },
  data() {
    const schema = Yup.object().shape({
      chooseLevel: Yup.string().required("Please Select any option"),
      formTitle: Yup.string().required("Form Title is required").min(4,"Title at least 4 character"),
      formType: Yup.string().required("Please seleect any option"),
      passwordProtection: Yup.string()
        .min(7, "Password must be at least 7 characters")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
          "Plase enter at lease one Capital letter, one small letter, one special character and one number"
        ),
    });
    return {
      enablePassword: false,
      formTitle: null,
      chooseLevel: "Choose Varification Level",
      formType: "Choose Form Type",
      schema,
      passwordProtection: "",
    };
  },

  methods: {
  //    encrypt (src) {
  //   const passphrase = '123456'
  //   return CryptoJS.AES.encrypt(src, passphrase).toString()
  // },

  // decrypt (src) {
  //   const passphrase = '123456'
  //   const bytes = CryptoJS.AES.decrypt(src, passphrase)
  //   const originalText = bytes.toString(CryptoJS.enc.Utf8)
  //   return originalText
  // },
    onSubmit(values) {
       
      this.$router.push(
        `/form-design/${values.formTitle},${values.chooseLevel},${values.formType},${values.passwordProtection}`
      );
  //      this.$router.push({

  //   name: "form-design",
     
  //   query: { title: values.formTitle, level: values.chooseLevel,formtype:values.formType,formProtection:values.formProtection  },
     
  // });
      //  this.$router.push({name: 'form-design', params: { createFormData}});
    },
  },
  mounted() {
    console.log(this.$route.params.controllerId);
  },
};
</script>
<style scoped>
input#passwordProtect {
  width: unset;
}
.newCreateFormBlock > div {
  width: 48%;
}
.newCreateFormBlock {
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin-bottom: 79px;
}
.newCreateFormFild label {
  font-weight: 600;
}
.newCreateForm form {
  width: 70%;
  border: 2px solid #1f1f1b85;
    border-radius: 7px;
    padding: 52px 17px;
}
.newCreateForm {
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.newCreateFormFild select {
  width: 100%;
  height: 40px;
  /* border: 1px solid #ddd; */
  border-radius: 7px;
}
.solidButton {
  background-color: #192a6b;
  color: #fff;
  padding: 10px 40px;
  border-radius: 7px;
  font-size: 1rem;
  margin-top: 10px;
  border: 2px solid #192a6b;
}
</style>