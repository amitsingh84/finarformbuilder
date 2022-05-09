<template>
  <div class="publishForm">
    
    <!-- <side-nav /> -->
     
    
     <div class="publicPriateSection">
        <div class="privatePublicUrl">
          <p class="linkShare">
            Link to share
            <button @click="choosePrivateOrPublick" class="buttonStyleSelect">
              <!-- <i :class="formData==''?'fa-solid fa-lock-open':''"></i> -->
              {{ formType == "private" ? "Private Form" : "Public Form" }}
            </button>
          </p>
        </div>
        <teleport to="body" v-if="showPopup">
          <div class="privatePublicPopup" @click="hidePopup"></div>
          <div class="privatePublicStyle">
            <div class="privatePublicBlock">
              <div>
                <h4>Sharing Setting</h4>
                <p class="closeIcon" @click="hidePopup" style="cursor: pointer">
                  <i class="fa-regular fa-circle-xmark"></i>
                </p>

                <div class="privateBlock">
                  <div>
                    <div class="privatePublicBlockIcon">
                      <i class="fa-solid fa-lock-open"></i>
                    </div>
                    <div class="privatePublicBlockText">
                      <label for="privateForm">Private Form</label>
                      <label for="privateForm"
                        >Available for only invited person</label
                      >
                    </div>
                    <input
                      type="radio"
                      name="publicPrivateForm"
                      id="privateForm"
                      v-model="formData"
                      value="private"
                      :checked="formType == 'private'"
                    />
                  </div>
                </div>
                <div class="publicBlock privateBlock">
                  <div>
                    <div class="privatePublicBlockIcon">
                      <i class="fa-solid fa-lock-open"></i>
                    </div>
                    <div class="privatePublicBlockText">
                      <label for="privateForm">publicForm</label>
                      <label for="privateForm"
                        >Available for only invited person</label
                      >
                    </div>
                    <input
                      type="radio"
                      name="publicPrivateForm"
                      id="publicForm"
                      v-model="formData"
                      value="public"
                      :checked="formType == 'public'"
                    />
                  </div>
                </div>
                <div class="text-center">
                  <button class="buttonStyle mt-4" @click="changePermission">
                    Change Permissoin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </teleport>
        <div>
          <div
            class="forPrivateUrl"
            v-if="formType == 'private' || showPrivate"
          >
            <div class="genBlockStyle">
              <p>Generate unique Link</p>
              <div class="addButtonStyle" style="text-align: right">
                <button class="buttonStyle" @click="addField">
                  Add Another Email
                </button>
              </div>
            </div>
            <div class="uniqueLinkStyle">
              <form @submit.prevent="sendLink">
                <div class="uniqueLinkBlock">
                  <div
                    class="uniqueLinkData"
                    v-for="(data, index) in items"
                    :key="index"
                  >
                    <div class="inputDataStyle">
                      <input
                        type="email"
                        :name="`formEmail_${index}`"
                        :id="`testing_${index}`"
                        v-model.trim="data.emailUrl"
                        @blur="checkEmailAddress(index)"
                      />
                      <span
                        :id="'emailAddress' + index"
                        class="emailAddress"
                      ></span>
                    </div>
                    <div class="uniquIdStyle">

                      <!-- <p  :id="`uniqueId_${index}`" class="uniquelinkId">{{data.uniqueLinkId}}</p> -->
                      <input
                        type="text"
                        :name="`uniqueId_${index}`"
                        :id="`uniqueId_${index}`"
                        :value="data.uniqueLinkId"
                        disabled
                      />
                      <p class="uniqLinkDeleteBtn" @click="deleteData(index)">
                        <i class="fa-solid fa-trash"></i>
                      </p>
                    </div>
                  </div>

                  <div style="text-align: right">
                    <button class="buttonStyle" type="submit">
                      Save and Send
                    </button>
                  </div>
                </div>
              </form>
            </div>

           
          </div>
          
        </div>

        <div class="forPublicUrl" v-if="formType == 'public' || showPublic">
          <p class="publicUrlInput">
            <input
              type="text"
              name="publicUrl"
              id="publicUrl"
              :value="`www.okayform.com/p${formId}/${uniqueId}`"/>
          </p>
          <p class="previewForm">
            <button class="primarybuttonStyle" @click="sendPublicLink">Save and Send Link</button>
          </p>
        </div>
      </div>
    
    
  </div>
</template>

<script>
 
// import ModalData from "../slots/ModalData.vue";
 
import adminService from "../services/adminService";
export default {
  components: {  },
  data() {
    return {
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
      checkEmailInvalid: false,
      uniqueId: Math.floor(
        new Date().getTime() / 1000 + Math.random() * 100000000000000 + 1
      ),

      items: [],
      publicUrl:[]
    };
  },

  methods: {
   
    checkEmailAddress(index) {
      let emailAddressId = document.getElementById(`emailAddress${index}`);
      let inputId = document.getElementById(`testing_${index}`);
      
      let getEmailValue = this.items[index].emailUrl;
      // console.log(getEmailValue);

      if (this.items[index].emailUrl === "") {
        emailAddressId.innerHTML = "Enter email address";
        inputId.classList.add("errorStyle");
      } else if (this.items[index].emailUrl != "") {
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])+[a-zA-Z0-9-]*$/.test(
            getEmailValue
          )
        ) {
          emailAddressId.innerHTML = "";
          inputId.classList.remove("errorStyle");
        } else {
          emailAddressId.innerHTML = "Please Enter Valid Email Id";
          inputId.classList.add("errorStyle");
        }
      }
    },
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
    deleteData(index) {
      if (this.items.length != 1) {
        this.items.splice(index, 1);
      } else {
        alert("its not deleted");
      }
    },
     sendPublicLink(){
this.$emit('send-public-url',`www.okayform.com/${this.formId}/${this.uniqueId}`)
    },
    sendLink() {
      // let newItem=JSON.stringify(this.items )
      this.items.map((value) => {
        if (value.emailUrl == "") {
          alert("please fill email address");
        } else {
      
      this.$emit('send-private-url',this.items)
      
        }
      });
    },

    checkVal(e) {
      console.log(e.target.value);
    },
    publicUniqueUrl(){
this.publicUrl.push({
        emailUrl: "",
        uniqueLinkId: `www.okayform.com/${this.formId}/${
          this.uniqueId
        }`,
       
      });
    },
    addField() {
      this.uniqueId++;
      this.items.push({
        emailUrl: "",
        uniqueLinkId: `www.okayform.com/${this.formId}/${
          this.uniqueId
        }`,
        // uniqueLinkId: `${this.title}-${this.formType}-${this.formId}-${this.uniqueNumberVal}${this.formId}${this.uniqueId}`,
      });
    },
    choosePrivateOrPublick() {
      // alert("testing");
      this.showPopup = true;
    },
    generateLink() {
      console.log(this.items);
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
    console.log("power", this.formType);
    this.getFormvalue();
    setInterval(() => {
      this.uniqueId = Math.floor(
        new Date().getTime() / 1000 + Math.random() * 100000000000000 + 1
      );

      // console.log(this.uniqueId);
      // console.log(this.randomNumber);
      // console.log(this.uniqueId);
    }, 1000);
    // this.title = this.$route.params.title;

    // this.formId = this.$route.params.formId;

    // this.formType = this.$route.params.formtype;
    if (this.uniqueNumberVal) {
      this.showGenerateLink = false;
    }
    this.addField();
  },
};
</script>
 
    
    <style scoped>
.forPrivateUrl input.errorStyle {
  border: 1px solid red;
}
.uniqLinkDeleteBtn {
  cursor: pointer;
  margin-bottom: 0;
}
.uniqueLinkData input {
  flex: 0.7;
}
.uniqueLinkData > div{
  flex: 1;
}
span.emailAddress {
  font-size: 11px;
  padding-left: 10px;
  color: red;
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
.uniqueLinkBlock {
  margin: 30px 0;
  border-radius: 7px;
  background: #fff;
  padding: 30px;
  height: calc(100vh - 381px);
  overflow-y: scroll;
}
.uniqueLinkBlock::-webkit-scrollbar {
  width: 0;
}
.genBlockStyle {
  display: flex;
  justify-content: space-between;
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
  padding: 7% 8%;
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
  flex-direction: column;
}
.uniqueLinkData {
  display: flex;
  gap: 20px;
  margin-bottom: 18px;
  align-items: self-start;
}
.uniqueLinkData input {
  width: 100%;
  flex: 1;
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
  padding-left: 10px;
  width: 100%;
}
.uniquIdStyle {flex: .7;display: flex;justify-content: space-between;gap: 30px;}

.uniquIdStyle > p {flex: 1;}

p.uniquelinkId {width: 100%;border: 1px solid #ddd;
    border-radius: 7px;
    height: 41px;padding-left: 10px;margin-bottom: 0;}

p.uniqLinkDeleteBtn {flex: .1;}
</style>