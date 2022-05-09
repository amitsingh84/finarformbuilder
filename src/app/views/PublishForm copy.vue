<template>
  <div class="publishForm">
    <controller-header />
    <side-nav />
    <dashboard-slot>
       
      <div class="publicPriateSection">
      <div class="privatePublicUrl">
        <p class="linkShare">
          Link to share
          <button @click="choosePrivateOrPublick" class="buttonStyleSelect">
           <!-- <i :class="formData==''?'fa-solid fa-lock-open':''"></i> -->
           {{ formType == 'private' ? "Private Form" : formData }}
           
          </button>
        </p>
      </div>
      <teleport to="body" v-if="showPopup">
        <div class="privatePublicPopup" @click="hidePopup"></div>
        <div class="privatePublicStyle">
          <div class="privatePublicBlock">
            <div>
            <h4>Sharing Setting</h4>
            <p class="closeIcon" @click="hidePopup" style="cursor:pointer"><i class="fa-regular fa-circle-xmark"></i></p>
            
            <div class="privateBlock">
              <div>
                <div class="privatePublicBlockIcon"><i class="fa-solid fa-lock-open"></i></div>
                <div class="privatePublicBlockText">

              <label for="privateForm">Private Form</label>
              <label for="privateForm">Available for only invited person</label>
                </div>
              <input
                type="radio"
                name="publicPrivateForm"
                id="privateForm"
                v-model="formData"
                value="Private Form"
              /></div>
            </div>
            <div class="publicBlock privateBlock">
               <div>
                <div class="privatePublicBlockIcon"><i class="fa-solid fa-lock-open"></i></div>
                <div class="privatePublicBlockText">

             <label for="privateForm">publicForm</label>
              <label for="privateForm">Available for only invited person</label>
                </div>
              <input
                type="radio"
                name="publicPrivateForm"
                id="publicForm"
                v-model="formData"
                value="Public Form"
              /></div>
              
              

            </div>
            <div class="text-center">

            <button class="buttonStyle mt-4 " @click="changePermission">Change Permissoin</button>
            </div>
            </div>
          </div>
        </div>
      </teleport>
      <div>
        <div class="forPrivateUrl" v-if="showPrivate">
          <p>
            How many unique links you want to generate?
            <span
              ><input type="number" name="uniqueNumber" id="uniqueNumber"
            /></span>
          </p>
          <p class="previewForm">
            <button @click="generateLink" class="buttonStyle">Generate Link</button>
          </p>
        </div>
        <div class="uniqueLink" v-if="showGenerateLink">
          <p class="uniqueTitle">Unique Links</p>
          <ul>
            <li>sdfsdfadssd</li>
            <li>sdfsdfsdf</li>
          </ul>
          <div class="preveiwForm formButtonRow">
            <button class="primarybuttonStyle">Print</button>
            <button class="primarybuttonStyle">Copy</button>
          </div>
        </div>
      </div>

      <div
        class="forPublicUrl"
        v-if="showPublic || formData == ''"
      >
        <p class="publicUrlInput">
          <input type="text" name="publicUrl" id="publicUrl" />
        </p>
        <p class="previewForm"><button class="primarybuttonStyle">Copy Link</button></p>
      </div>
      </div>
    </dashboard-slot>
  </div>
</template>

<script>
import DashboardSlot from "../components/DashboardSlot.vue";
// import VeriftyMobileEmail from "../components/VeriftyMobileEmail.vue";
import SideNav from "../components/SideNav.vue";
// import ModalData from "../slots/ModalData.vue";
import ControllerHeader from "./ControllerHeader.vue";
export default {
  components: { DashboardSlot, SideNav, ControllerHeader },
  data() {
    return {
      formData: "",
      showGenerateLink: false,
      showPopup: false,
      showPrivate:false,
      showPublic:false,
       title: "",
       
      formType: "",
       
      formId:""

    };
  },
  methods: {
    choosePrivateOrPublick() {
      // alert("testing");
      this.showPopup = true;
    },
    generateLink() {
      this.showGenerateLink = true;
    },
    hidePopup() {
      this.showPopup = false;
    },
    changePermission(){
      if(this.formData=='Private Form')
      {
      
     this.showPrivate=true
     this.showPublic=false
    }
    else if(this.formData=='Public Form'){
     this.showPrivate=false
     this.showPublic=true
    }
    this.showPopup = false;
  },
  },
  mounted() {
    this.title = this.$route.query.title;
     
    this.formId=this.$route.query.formId
      
      this.formType = this.$route.query.formtype;
        
   
    
  },
}
</script>
    
    <style scoped>
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
  padding-bottom: 48px
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
    flex: .9;
}
.buttonStyle{
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
.forPrivateUrl {display: flex;justify-content: space-between;}

.forPrivateUrl p {display: flex;justify-content: space-between;gap: 17px;align-items: center;color: #192a6b;font-weight: 600;}

.forPrivateUrl input {width: 40px;border-radius: 7px;border: 1px solid #ddd;height: 40px;}
</style>