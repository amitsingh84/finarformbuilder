<template>
  <div class="publishForm">
    <controller-header />
    <!-- <side-nav /> -->
    <side-nav-slot>
      <div class="creaetNewFormBtnStyle">
        <router-link to="/login">Dashboard</router-link>
        <button
          @click="setSelectedComponent('private-or-public-form')"
          :class="selectedComponent == 'private-or-public-form' ? 'active' : ''"
        >
          Link
        </button>
        <button
          :class="selectedComponent == 'send-email' ? 'active' : ''"
        >
          Email
        </button>
      </div>
    </side-nav-slot>

    <dashboard-slot>
      <keep-alive>
        <component :is="selectedComponent" @send-private-url="privateUrl" @send-public-url="publicUrl" :itemss="newItem"></component>
      </keep-alive>
    </dashboard-slot>
  </div>
</template>

<script>
import DashboardSlot from "../components/DashboardSlot.vue";
import SideNavSlot from "../components/SideNavSlot.vue";
// import VeriftyMobileEmail from "../components/VeriftyMobileEmail.vue";
// import SideNav from "../components/SideNav.vue";
// import ModalData from "../slots/ModalData.vue";
import ControllerHeader from "./ControllerHeader.vue";
// import PublishForm from "../views/PublishForm.vue";
import SendEmail from "./SendEmail.vue";
import PrivateOrPublicForm from "../components/PrivateOrPublicForm.vue";
import ControllerHeader1 from "./ControllerHeader.vue";
export default {
  components: {
    DashboardSlot,
    ControllerHeader,
    SideNavSlot,
    PrivateOrPublicForm,
    SendEmail,
    ControllerHeader1
},
  data() {
    return {
      selectedComponent: "private-or-public-form",
      formData: "",
      showGenerateLink: false,
      showPopup: false,
      showPrivate: false,
      showPublic: false,
      title: "",

      formType: "",

      formId: "",
      uniqueNumberVal: 0,
      uniqueNumber: null,
      newItem:[]
    };
  },
  methods: {
    publicUrl(url){
      // publicUniqueUrl
      console.log(url);
      this.selectedComponent = "send-email"
    },
    privateUrl(items){
      this.newItem=items
console.log(items);
this.selectedComponent = "send-email"
    },
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
      console.log(comp);
    },
    choosePrivateOrPublick() {
      // alert("testing");
      this.showPopup = true;
    },
    generateLink() {
      if (this.uniqueNumberVal != 0) {
        this.showGenerateLink = true;
      } else {
        alert("Please Enter Number");
      }

      // this.uniqueNumber=this.uniqueNumberVal
    },
    hidePopup() {
      this.showPopup = false;
    },
    changePermission() {
      this.formType = this.formData;
      if (this.formData == "private") {
        this.showPrivate = true;
        this.showPublic = false;
      } else if (this.formData == "public") {
        this.showPrivate = false;
        this.showPublic = true;
      }
      this.showPopup = false;
    },
  },
  mounted() {
    this.title = this.$route.params.title;

    this.formId = this.$route.params.formId;

    this.formType = this.$route.params.formtype;
    if (this.uniqueNumberVal) {
      this.showGenerateLink = false;
    }
  },
};
</script>
    
    <style scoped>
.creaetNewFormBtnStyle {
  display: flex;
  flex-direction: column;
  margin: 17px 0;
}

.creaetNewFormBtnStyle button {
  background: transparent;
  border: none;
  color: #fff;
  text-align: left;
  padding: 12px 0;
  padding-left: 17px;
  font-weight: 600;
}

.creaetNewFormBtnStyle a {
  list-style: none;
  text-decoration: none;
  color: #fff;
  padding-left: 17px;
  margin-bottom: 9px;
}

.creaetNewFormBtnStyle button.active {
  background: #fff;
  color: #192a6b;
}
.publishForm {
  height: 100%;
}
.privatePublicPopup {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d0d0173;
  z-index: 9999;
}

/* .privatePublicPopup:after {content: '';background: #20200175;width: 100%;height: 100%;z-index: 9999;position: absolute;} */

.privatePublicBlock {
  /* position: absolute; */
  /* z-index: 999999; */
  background: #fff;
  padding-bottom: 48px;
}
.privatePublicStyle {
  position: absolute;
  width: 48%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.publicPriateSection {
  height: 100%;
  padding: 10% 17%;
  background: #ebebf4;
}
.forPublicUrl {
  display: flex;
  justify-content: space-between;
}
p.publicUrlInput {
  flex: 0.9;
}
.buttonStyle {
  background: #192a6b;
  border: none;
  color: #fff;
  padding: 10px 24px;
  font-weight: 600;
  border-radius: 7px;
}
p.publicUrlInput input {
  height: 40px;
  border-radius: 7px;
  border: 1px solid #ddd;
}
button.buttonStyleSelect {
  background: #cee6e0;
  border: none;
  color: #192a6b;
  padding: 7px 21px;
  font-weight: 600;
  border-radius: 7px;
  margin-left: 17px;
}
.privatePublicBlock h4 {
  background: #192a6b;
  color: #fff;

  padding: 17px;
  font-size: 14px;
}
p.closeIcon {
  position: absolute;
  color: #fff;
  top: 8px;
  right: 12px;
  font-size: 24px;
}
.privateBlock > div {
  display: flex;
  justify-content: space-between;
}
.privatePublicBlockText {
  display: flex;
  flex-direction: column;
}
.privateBlock > div {
  display: flex;
  justify-content: space-between;
  width: 74%;
  margin: auto;
  background: #192a6b;
  padding: 17px;
  border-radius: 10px;
  align-items: center;
  gap: 17px;
  color: #fff;
}
.privateBlock {
  padding: 28px 0;
  padding-bottom: 0;
}
p.linkShare {
  color: #192a6b;
  font-weight: 600;
}
.forPrivateUrl {
  display: flex;
  justify-content: space-between;
}

.forPrivateUrl p {
  display: flex;
  justify-content: space-between;
  gap: 17px;
  align-items: center;
  color: #192a6b;
  font-weight: 600;
}

.forPrivateUrl input {
  width: 40px;
  border-radius: 7px;
  border: 1px solid #ddd;
  height: 40px;
}
.uniqueLink ul {
  list-style: circle;
  padding: 15px;
  background: #fff;
  border: 1px solid #192a6b;
  height: calc(100vh - 420px);
  overflow: hidden;
  overflow-y: scroll;
}
.uniqueLink ul::-webkit-scrollbar {
  width: 0;
}
.preveiwForm.formButtonRow {
  display: flex;
  justify-content: space-evenly;
}
.uniqueLink ul li {
  padding: 7px 0;
  font-size: 14px;
  color: #192a6b;
  font-weight: 600;
  margin-left: 17px;
  padding-left: 10px;
}
</style>