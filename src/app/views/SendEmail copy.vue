<template>
  <div class="publishForm">
    <controller-header />
    <side-nav />
    <dashboard-slot>
      <div class="emailSection">
        <div class="emailBlock">
          <div class="invitedByEmail">
            <h6>Invited By Email</h6>
            <p class="emailPara">
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
            <div class="invitationBodySubject">
              <p>Link:</p>
              <input type="text" name="subject" id="subject" />
            </div>
            <div class="invitaionBodyLink invitationBodySubject">
              <p>Subject:</p>
              <input type="text" name="subject" id="subject" />
            </div>
            <div class="invitationBodyMsg invitationBodySubject">
              <p>Message:</p>
              <div class="msgBodyStyle">
                <QuillEditor theme="snow" />
              </div>
            </div>
          </div>
          <div class="sendButton mt-4 text-center">
              <button class="primarybuttonStyle">Send Invitation</button>
          </div>
        </div>
      </div>
    </dashboard-slot>
  </div>
</template>

<script>
import DashboardSlot from "../components/DashboardSlot.vue";
import SideNav from "../components/SideNav.vue";
import ControllerHeader from "./ControllerHeader.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  components: { DashboardSlot, SideNav, ControllerHeader, QuillEditor },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.$route);
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