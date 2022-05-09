<template>
  <div class="publishForm">
      
      <div class="emailSection">
        <div class="emailBlock">
          <form @submit.prevent="sendInvitation">
          <div class="invitedByEmail">
            <h6>Invited By Email</h6>
            <p class="emailPara" v-if="formType==='public'">
              <i class="fa-solid fa-envelope"></i> <span>To:</span
              ><input
                type="email"
                name="sendEmail"
                id="sendEmail"
                placeholder="Enter Email Address To Send Invitation"
              />
            </p>
          </div>
          <div class="invitationBody">
            <div class="invitationBodySubject" v-if="formType==='public'">
              <p>Link:</p>
              <input type="text" name="urlLink" id="urlLink" v-model="emailUrl"/>
            </div>
            <div class="invitaionBodyLink invitationBodySubject">
              <p>Subject:</p>
              <input type="text" name="subject" id="subject" v-model="emailSubject"/>
            </div>
            <div class="invitationBodyMsg invitationBodySubject">
              <p>Message:</p>
              <div class="msgBodyStyle">
                <QuillEditor theme="snow"/>
              </div>
              
            </div>
          </div>
          <div class="sendButton mt-4 text-center">
              <button class="primarybuttonStyle" type="submit">Send Invitation</button>
              
          </div>
          </form>
        </div>
      </div>
    
  </div>
</template>

<script>
 
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import adminService from '../services/adminService';
export default {
  components: { QuillEditor },
  data() {
    return {
      title:'',
      formType:'',
      emailUrl:'',
      emailSubject:'',
      emailMessage:'done data'
    };
  },
  props:['itemss'],
  methods: {
    // check(e){
    //  return e
    // },
      getFormvalue() {

     this.formId = this.$route.params.formId;
  // this.formId=formId
      adminService
        .getControllerFormWithId(this.formId)
        .then((response) => {
          if (!this.formId) {
            alert(response.data.formId);
          } else {
            console.log("res", response);
            this.title = response.data.FormTitle;
          }

          this.formType = response.data.IsPrivate;
          //
        })
        .catch((error) => {
          console.log(error);
          // this.toast.error("Something went wrong", error.message);
        });
    },
   sendInvitation() {

     this.formId = this.$route.params.formId;
 const body = {
          toEmailList:this.itemss,
          formId:this.formId,
          message:this.emailMessage,
          subject:this.emailSubject
      };
      adminService
        .getDataSubjectSendInvitaion(body)
        .then((response) => {
          console.log(response);

          
        })
        .catch((error) => {
          console.log(error);
          // this.toast.error("Something went wrong", error.message);
        });
    },
  },
  mounted() {
    console.log(this.$route);
    this. getFormvalue()
  },
   
};
</script>
<style scoped>
.emailSection {
  padding: 70px 20%;
}
p.emailPara {
  border: 1px solid #d1d5db;
  border-radius: 7px;
  color: #d1d5db;
  display: flex;
  gap: 12px;
  padding: 4px 17px;
  align-items: center;
}
input[type="email"] {
  outline: none;
  border: none;
}
.invitationBody {
  border: 1px solid #d1d5db;
  border-radius: 7px;
  padding: 30px;
}
.invitationBodySubject p {
  margin-bottom: 0;
}
.invitationBodySubject {
  display: flex;
  gap: 17px;
  align-items: center;
  margin: 13px 0;
}
.msgBodyStyle .ql-editor.ql-blank {
  height: 148px;
}
.invitationBodySubject > p {
  min-width: 70px;
  color: #192a6b;
  font-size: 15px;
  font-weight: 600;
}
.invitationBodyMsg.invitationBodySubject {
  align-items: self-start;
}
input[type="text"] {
  border: 1px solid #d1d5db;
  border-radius: 7px;
  height: 40px;
  outline: none;
  padding-left: 17px;
}
.msgBodyStyle {
  width: 100%;
}
</style>