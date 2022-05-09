<template>
  <controller-header />
  <div class="newCreateForm">
    <form @submit.prevent="SubmitForm">
      <div class="newCreateFormBlock">
        <div class="newCreateFormFild">
          <label for="formTitle" class="form-label">Title</label>
          <input
            type="email"
            class="form-control"
            id="formTitle"
            aria-describedby="emailHelp"
            placeholder="Form Title"
            v-model="formTitle"
            @blur="formTitleValidation"
          />
        </div>
        <div class="newCreateFormFild">
          <label for="varificationLevel" class="form-label"
            >Verification Level of Data Subject</label
          >
          <select
            name="chooseVarification"
            id="varificationLevel"
            v-model="chooseLevel"
            @blur="formLevelValidation"
          >
            <option selected>Choose Varification Level</option>
            <option value="levle1">Email <span>(levle 1)</span></option>
            <option value="levle2">Email,Mobile</option>
            <option value="levle3">Email,Mobile,Address</option>
          </select>
        </div>
        <div class="newCreateFormFild">
          <label for="formType" class="form-label">Form Type</label>
          <select
            name="chooseFormType"
            id="formType"
            v-model="formType"
            @blur="ChooseTypeValidation"
          >
            <option selected>Choose Form Type</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
           <p class="invalidText" v-if="invalidFormTypeData ">
          This First Name Feild is required
        </p>
        </div>
        <div class="newCreateFormFild">
          <div>
            <input
              type="checkbox"
              id="passwordProtect"
              aria-describedby="passwordProtect"
              v-model="enablePassword"
              class="meze-3"
            />
            <label for="passwordProtect" class="form-label"
              >Password Protection</label
            >
          </div>
          <input
            v-if="enablePassword"
            type="text"
            name="passowrd"
            id="passwordProtection"
            class="form-control"
            aria-describedby="passwordProtect"
            placeholder="Enter Password"
            v-model="formProtection"
            @blur="formPasswordValidation"
          />
          <p class="invalidText" v-if="msg.trim() && submitted==false ">
         {{msg}}
        </p>
        </div>
      </div>
      <div class="buttonStyle text-center mt-4">
        <button type="submit" class="solidButton">Create Form</button>
      </div>
    </form>
  </div>
</template>

<script>
import ControllerHeader from "./ControllerHeader.vue";
export default {
  components: { ControllerHeader },
  data() {
     
    return {
      enablePassword: false,
      formTitle: null,
      chooseLevel: null,
      formType: '',
      formProtection: '',
      submitted:false,
      numbers: 40,
      invalidFormTypeData:false,
      invalidPasswordData:false,
      msg:''
    };
  },

  methods: {
    SubmitForm() {
      console.log(
        this.formTitle,
        this.chooseLevel,
        this.formType,
        this.formProtection
      );
      // this.$router.push(
      //   `/form-design/${this.formTitle},${this.chooseLevel},${this.formType},${this.formProtection}`
      // );
      this.$router.push({

    name: "form-design",
     
    query: { title: this.formTitle, level: this.chooseLevel,formtype:this.formType,formProtection:this.formProtection  },
     
  });
    },
    formPasswordValidation() {
      let pattern=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/
      if (this.formProtection.trim() == '') {
        this.invalidPasswordData='invalid'
        return this.msg="enter at data"
      }
     else if(this.formProtection.length<8){
       return this.msg="enter at least"
     }
     else if(this.formProtection.length>=8){
       if(this.formProtection.match(pattern)){
         return this.submitted==true
       }
       else{
         this.msg="please check"
       }
      
     }
      else{
        this.invalidPasswordData=false
      }
    },
    ChooseTypeValidation() {},
    formLevelValidation() {},
    formTitleValidation() {},
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
  width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
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
  border: 1px solid #ddd;
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