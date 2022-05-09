<template>
  <controller-header />
  <div class="designForm">
    <show-all-forms
      :items="newElements"
      v-if="showHidePreview"
      @close-page="pageClose"
    />
    <div v-if="!showHidePreview">
      <div class="desingFormBlockRight">
        <div class="previewForm">
          <button v-if="newElements.length" @click="showPrview">Preview</button>
        </div>
        <form-block-right>
          <h3 class="text-center mb-4">{{ createFormData.title }}</h3>
          <draggable
            class="content_block"
            :list="newElements"
            item-key="id"
            group="elements"
            v-bind="dragOptions"
          >
            <template #item="{ element, index }">
              <div v-if="newElements.length">
                <form-item-edit
                  :item="element"
                  :index="index"
                  :items="newElements"
                  :id="index"
                  :elementId="element.id"
                  @show-data-id="showElementSetting"
                  @delete-data-id="deleteElementData"
                />
                <!-- <i class="fa fa-times close" @click="removeAt(index)">Delete</i> -->
              </div>
            </template>
          </draggable>
        
          <div v-for="items of newElements" :key="items.id">
            <div v-if="items.id == newId">
              <name-element-opttions
                @display-element="dispalyElement"
                v-if="items.name == 'Full Name'"
                :item="items"
                :id="newId"
              />
              <DropdownElementSetting
                @display-element="dispalyElement"
                v-if="items.name == 'Dropdown'"
                :item="items"
                :id="newId"
                :newElId="newElements"
              />
              <email-element-opttions
                @display-element="dispalyElement"
                v-if="items.name == 'Email Address'"
                :item="items"
                :id="newId"
              />
              <text-element-options
                @display-element="dispalyElement"
                v-if="items.name == 'Text Box'"
                :item="items"
                :id="newId"
              />
              <number-element-options
                @display-element="dispalyElement"
                v-if="items.name == 'Phone Number'"
                :item="items"
                :id="newId"
              />
              <address-element-options
                @display-element="dispalyElement"
                v-if="items.name == 'Address'"
                :item="items"
                :id="newId"
              />
              <heading-element-options
                @display-element="dispalyElement"
                v-if="items.name == 'Heading'"
                :item="items"
                :id="newId"
              />
              <radio-box-element-options
                @display-element="dispalyElement"
                v-if="items.name == 'Single Selection'"
                :item="items"
                :id="newId"
              />
              <check-box-element-options
                @display-element="dispalyElement"
                v-if="items.name == 'Multiple Selection'"
                :item="items"
                :id="newId"
              />
              <message-element-options
                @display-element="dispalyElement"
                v-if="items.name == 'Message'"
                :item="items"
                :id="newId"
              />
              <date-element-options
                @display-element="dispalyElement"
                v-if="items.name == 'Date & Time'"
                :item="items"
                :id="newId"
              />
            </div>
          </div>
        </form-block-right>
          <div class="previewForm text-center"><button @click="publishForm">Publish</button></div>
      </div>
      <form-block-left>
        <div class="designFormBlockElement">
          <h4>Form Element</h4>
          <draggable
            class="dragArea list-group"
            :list="elements"
            :group="{ name: 'elements', pull: 'clone', put: false }"
            item-key="id"
            :clone="onClone"
            :sort="false"
            v-if="showAllElementNames"
          >
            <template #item="{ element }">
              <div class="list-group-item">
                <p><i :class="element.icon"></i> {{ element.name }}</p>
              </div>
            </template>
          </draggable>
        </div>
      </form-block-left>
      <div class="flex justify-between">
        <json-display class="w-64" :value="newElements" />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { elements } from "../api/config";
import { levelData } from "../api/config";
// import ElementsSetting from "../components/ElementsSetting.vue";
import FormBlockLeft from "../components/FormBlockLeft.vue";
import FormBlockRight from "../components/FormBlockRight.vue";
import FormItemEdit from "../components/FormItemEdit.vue";
import NameElementOpttions from "../components/nameElement/NameElementOpttions.vue";
import EmailElementOpttions from "../components/emailElement/EmailElementOptions.vue";
import DropdownElementSetting from "../components/dropdownElement/DropdownElementSetting.vue";
import JsonDisplay from "./JsonDisplay.vue";
import ShowAllForms from "./ShowAllForms.vue";
import NumberElementOptions from "../components/numberElement/NumberElementOptions.vue";
import AddressElementOptions from "../components/addressElement/AddressElementOptions.vue";
import HeadingElementOptions from "../components/Heading/HeadingElementOptions.vue";
import CheckBoxElementOptions from "../components/checkBox/CheckBoxElementOptions.vue";
import RadioBoxElementOptions from "../components/radioBox/RadioBoxElementOptions.vue";
import MessageElementOptions from "../components/messageElement/MessageElementOptions.vue";
import DateElementOptions from "../components/dateElement/DateElementOptions.vue";
import TextElementOptions from "../components/textElement/TextElementOptions.vue";
import ControllerHeader from "./ControllerHeader.vue";
import adminService from "../services/adminService"; 
// import LevelInput from "../components/level/LevelInput.vue";
// import LevelInputSetting from "../components/level/LevelInputSetting.vue";
// import LevelNumberSetting from "../components/level/LevelNumberSetting.vue";
// import LevelNumberInput from "../components/level/LevelNumberInput.vue";
// import AddressLevelInput from "../components/level/AddressLevelInput.vue";
// import AddressInputSetting from '../components/level/AddressInputSetting.vue';
export default {
  components: {
    draggable,
    FormItemEdit,
    JsonDisplay,
    FormBlockLeft,
    FormBlockRight,
    ShowAllForms,
    NameElementOpttions,
    DropdownElementSetting,
    EmailElementOpttions,
    NumberElementOptions,
    AddressElementOptions,
    HeadingElementOptions,
    CheckBoxElementOptions,
    RadioBoxElementOptions,
    MessageElementOptions,
    DateElementOptions,
    TextElementOptions,
    ControllerHeader,
    // LevelInput,
    // LevelInputSetting,
    // LevelNumberSetting,
    // LevelNumberInput,
    // AddressLevelInput,
    // AddressInputSetting,
  },
  data() {
    return {
      view: false,
      newElements: [],
      draggable: false,
      elIndex: 0,
      uID: 0,
      elements,
      showElementSettings: false,
      newId: null,
      showHidePreview: false,
      showAllElementNames: true,
      setActiveElement: true,
      createFormData: this.$route.params,
      levelId: "",
      levelItem: {},
      levelData,
      // emailId:null,
      // addressId:null,
      // phoneId:null
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 300,
        group: "elements",
      };
    },
  },
  methods: {
    publishForm(){
       const body = {
        formPassword:this.$route.params.formProtection,
        formTitle:this.$route.params.title,
        VerificationLevel:this.$route.params.level,
        IsPrivate:this.$route.params.formtype,
        formSourceCode:JSON.stringify(this.newElements),
        // formStatus: null,
        // formVersion: null,
      };
      console.log('test',this.$route);
      console.log('body',body);
    //   this.showLoading(true);
    console.log(body);
      adminService
        .addNewForm(body)
        .then((response) => {
        //   this.showLoading(false);
          console.log('res',response);
          console.log(this.newElements);
    //        this.$router.push({
    //          name: "publish-form",
     
    // query: { title: body.formTitle, level: body.fomrlevel,formtype:body.formtype,formProtection:body.formPassword,formId:response.data.Id  },
        
    //        });
      this.$router.push(
        // `/publish/${response.data.Id}`
         `/publishform/${response.data.Id}`
      );
        })
        .catch((error) => {
          console.log(error);
          // this.toast.error("Something went wrong", error.message);
        });
      
    },
    submitData() {
      console.log(this.levelData);
    },
    //    getImgUrl(pet) {
    //   var images = require.context('@/assets/imgs/', false, /\.png$/)
    //   console.log(images('./' + pet + ".png"));
    //   console.log(pet);
    //   return require(`@/app/assets/imgs/h.png`)
    // },
    showPrview() {
      //   if (this.newElements.length >= 1) {
      //   //  const route=this.$router.resolve({ path:"/form"}); window.open(route.href, '_blank')
      //    const route=this.$router.push({ name:"show-all-forms",query:{data:this.newElements}}); window.open(route.href, '_blank')
      this.showHidePreview = true;
      //     // window.open("/form",'_blank');
      //   }
      //   //console.log(this.showHidePreview);
    },
    pageClose() {
      this.showHidePreview = false;
      this.showAllElementNames = true;
    },
    dispalyElement() {
      this.showAllElementNames = true;

      const dataNew = document.getElementsByClassName("checka");
      for (var i = 0; i < dataNew.length; i++) {
        dataNew[i].classList.remove("active");
      }
      console.log(dataNew);
    },
    showElementSetting(userId) {
      for (let value of this.newElements) {
        if (value.id == userId) {
          this.newId = userId;
          this.showAllElementNames = false;
        }
      }
    },
    // showAddressSetting(id) {
    //   console.log("id", id);
    //   // this.levelItem = item;
    //   this.levelId = id;
    //   console.log(this.addressId);
    //   this.addressId.classList.add('active')
    //   this.emailId.classList.remove('active')
    //   this.phoneId.classList.remove('active')
    // },
    // deletAddressSetting(id) {
    //   console.log("id", id);
    //   this.levelId = id;

    // },
    //     showPhoneSetting(id){
    //       console.log(id);
    //       console.log(this.phoneId);
    //        this.addressId.classList.remove('active')
    //       this.emailId.classList.remove('active')
    //       this.phoneId.classList.add('active')
    //     },
    //     showEmailSetting(id){
    //  console.log(id);
    //       console.log(this.emailId);
    //        this.addressId.classList.remove('active')
    //       this.emailId.classList.add('active')
    //       this.phoneId.classList.remove('active')
    //     },
    deleteElementData(userId) {
      let index = this.newElements
        .map((x) => {
          //console.log(x);
          return x.id;
        })
        .indexOf(userId);
      // //console.log(index);
      this.newElements.splice(index, 1);
      this.showAllElementNames = true;
      // //console.log(this.newElements);
    },
    onClone(item) {
      this.elIndex++;
      //console.log(this.newElements);
      if (item.name == "Dropdown") {
        return {
          name: item.name,
          id: this.elIndex,
          label: item.label,
          values: [...item.values],
          defalulValueLabel: item.defalulValueLabel,
        };
        //  this.uID=this.elIndex
        //  //console.log(this.uID);
        //  this.elements.push(this.uID)
      } else if (item.name == "Full Name") {
        return {
          name: item.name,
          id: this.elIndex,
          label: item.label,
        };
      } else if (item.name == "Text Box") {
        return {
          name: item.name,
          id: this.elIndex,
          label: item.label,
        };
      }
      if (item.name == "Email Address") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          container: true,
          prefix: item.prefix,
          isRequired: item.isRequired,
          label: item.label,
        };
      }
      if (item.name == "Phone Number") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          container: true,
          prefix: item.prefix,
          isRequired: item.isRequired,
          label: item.label,
        };
      }
      if (item.name == "Address") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          addressOptions: item.addressOptions,
        };
      }
      if (item.name == "Heading") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          description: item.description,
        };
      }
      if (item.name == "Single Selection") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          values: [...item.values],
          isSelected: item.isSelected,
        };
      }
      if (item.name == "Multiple Selection") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          values: [...item.values],
          isSelected: item.isSelected,
        };
      }
      if (item.name == "Message") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          values: item.values,
          isSelected: item.isSelected,
        };
      }
      if (item.name == "Date & Time") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          isTimeActive: item.isTimeActive,
          timeFormat: item.timeFormat,
          dateFormat: item.dateFormat,
        };
      }
      if (item.name == "Text Box") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          isTimeActive: item.isTimeActive,
          timeFormat: item.timeFormat,
          dateFormat: item.dateFormat,
        };
      }
    },
  },
  mounted() {
    console.log("query", this.$route.params);
    // this.phoneId= document.getElementById("level_phone_setting")
    // this.addressId= document.getElementById("level_address_level_setting")
    // this.emailId= document.getElementById("level_email_setting")
    // console.log(this.phoneId,this.addressId,this.emailId);
    //  let fetchFormData=JSON.parse(this.createFormData.createFormData)
    // console.log(fetchFormD);
    console.log(this.createFormData);
    if (this.createFormData.level == "level1") {
      this.newElements.push(this.levelData[0]);
    } else if (this.createFormData.level == "level2") {
      this.newElements.push(this.levelData[0]);
      this.newElements.push(this.levelData[1]);
    } else if (this.createFormData.level == "level3") {
      this.newElements.push(this.levelData[0]);
      this.newElements.push(this.levelData[1]);
      this.newElements.push(this.levelData[2]);
    }
  },
};
</script>
<style scoped>
.designFormBlockElement h4 {
  background: #6868ac;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-family: "Roboto Slab";
}
.list-group-item {
  padding: 0;
}
.content_block {
  height: calc(100vh - 264px);
}
.list-group-item svg {
  margin-right: 17px;
  font-size: 30px;
}
.list-group-item p {
  margin-block: 0;
  padding: 12px;
  margin-right: 17px;
  font-size: 19px;
  display: flex;
  align-items: center;
}
.list-group-item span {
  /* display:inline-block; */
}
.list-group-item {
  background: #474781;
  color: #fff;
}

.designForm {
  position: relative;
  overflow-y: scroll;
  height: calc(100vh - 80px);
}

/*-------new style----------*/
.element_setting h4 {
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #fff;
  margin-bottom: 19px;
}
.Element_setting_option {
  padding: 0 30px 30px 30px;
}
.inputLabel p,
.inputLablAlign p {
  margin-bottom: 5px;
  font-size: 1.2rem;
  font-weight: 600;
}

.inputLabel input {
  width: 100%;
  height: 30px;
  border-radius: 7px;
  border: none;
}

.inputLabel,
.inputLablAlign {
  margin-bottom: 17px;
}
.inputLablAlign button {
  border: none;
  padding: 10px 17px;
  border-radius: 2px;
  background: #192a6b;
  font-weight: 600;
  color: #fff;
}
.inputLablAlign > div {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.inputLablAlign > div button {
  flex: 1;
}
.element_setting {
  position: absolute;
  right: 0;
  top: 0;
  width: 30%;
  z-index: 99;
  background: #6868ac;
  color: #fff;
}
.desingFormBlockRight {
  width: 68%;
  padding: 10px 0 10px 17px;
  height: calc(100vh - 89px);
  overflow-y: scroll;
}
.previewForm {
  height: 48px;
}
.previewForm button {
  background: #192a6b;
  border: none;
  color: #fff;
  padding: 10px 24px;
  font-weight: 600;
  border-radius: 7px;
}
/*-------------------not sure css--------------*/
.creaetNewFormBtn {
  text-align: center;
}
.desingFormBlockRightt::-webkit-scrollbar {
  display: none;
}
.desingFormBlockRight::-webkit-scrollbar {
  display: none;
}
.desingFormBlockRightt {
  /* border: 1px solid; */
  border-radius: 7px;
  height: calc(100vh - 233px);
  padding: 10px;
  padding-right: 40px;
  overflow-y: scroll;
}
p.blankElement {
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;
  margin: auto;
  text-align: center;
}
</style>
