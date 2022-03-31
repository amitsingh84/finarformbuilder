<template>
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
          <div sytle="position: relative;" v-if="!newElements.length">
            <p class="blankElement">
              checkDrag your first question here from the left.
            </p>
          </div>
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
                  @send-data-id="showElementSetting"
                  @delete-data-id="deleteElementData"
                ></form-item-edit>
                <!-- <i class="fa fa-times close" @click="removeAt(index)">Delete</i> -->
              </div>
            </template>
          </draggable>
          <div v-for="items of newElements" :key="items.id">
            <div v-if="items.id == newId">
              <name-element-opttions
                @display-element="dispalyElement"
                v-if="items.name == 'name'"
                :item="items"
                :id="newId"
              />
              <select-element-setting
                @display-element="dispalyElement"
                v-if="items.name == 'select'"
                :item="items"
                :id="newId"
              />
              <email-element-opttions
                @display-element="dispalyElement"
                v-if="items.name == 'Email Address'"
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
              <check-box-element-options
                @display-element="dispalyElement"
                v-if="items.name == 'Single Box'"
                :item="items"
                :id="newId"
              />
            </div>
          </div>
        </form-block-right>
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
            v-if="newTest"
          >
            <template #item="{ element }">
              <div class="list-group-item">
                <span><img src="../../app/assets/imgs/h.png" alt="icon" /></span
                >{{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </form-block-left>
      <div class="flex justify-between">
        <!-- <json-display class="w-64 mr-1" :value="elements" /> -->

        <json-display class="w-64" :value="newElements" />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { elements } from "../api/config";
// import ElementsSetting from "../components/ElementsSetting.vue";
import FormBlockLeft from "../components/FormBlockLeft.vue";
import FormBlockRight from "../components/FormBlockRight.vue";
import FormItemEdit from "../components/FormItemEdit.vue";
import NameElementOpttions from "../components/nameElement/NameElementOpttions.vue";
import EmailElementOpttions from "../components/emailElement/EmailElementOptions.vue";
import SelectElementSetting from "../components/selectElement/SelectElementSetting.vue";
import JsonDisplay from "./JsonDisplay.vue";
import ShowAllForms from "./ShowAllForms.vue";
import NumberElementOptions from '../components/numberElement/NumberElementOptions.vue';
import AddressElementOptions from '../components/addressElement/AddressElementOptions.vue';
import HeadingElementOptions from '../components/Heading/HeadingElementOptions.vue';
import CheckBoxElementOptions from '../components/checkBox/CheckBoxElementOptions.vue';
export default {
  components: {
    draggable,
    FormItemEdit,
    JsonDisplay,
    FormBlockLeft,
    FormBlockRight,
    ShowAllForms,
    NameElementOpttions,
    SelectElementSetting,
    EmailElementOpttions,
    NumberElementOptions,
    AddressElementOptions,
    HeadingElementOptions,
    CheckBoxElementOptions,
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
      newTest: true,
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
    showPrview() {
      if (this.newElements.length >= 1) {
        this.showHidePreview = true;
      }
      //console.log(this.showHidePreview);
    },
    pageClose() {
      this.showHidePreview = false;
       this.newTest = true;
      
      // setTimeout(() => {
        
      //  let title = document.getElementById("element_setting");
      // title.classList.remove("active");
     
      // }, 1);
      
      //  this.newTest = false;
      // setTimeout(() => {
      //   let newtitle = document.getElementById("element_setting");
      //   //console.log(newtitle);
      //   newtitle.classList.remove("active");
      // }, 1);
    },
    dispalyElement() {
      this.newTest = true;
    },
    showElementSetting(userId) {
      for (let value of this.newElements) {
        
        if (value.id == userId) {
          this.newId = userId;
          this.newTest = false;
        }

       
      }
    },
    deleteElementData(userId) {
      let index = this.newElements
        .map((x) => {
          //console.log(x);
          return x.id;
        })
        .indexOf(userId);
      // //console.log(index);
      this.newElements.splice(index, 1);
      this.newTest = true;
      // //console.log(this.newElements);
    },
    onClone(item) {
      this.elIndex++;
      //console.log(this.newElements);
      if (item.name == "select") {
        return {
          name: item.name,
          id: this.elIndex,
          label: item.label,
          values: item.values,
          defalulValueLabel: item.defalulValueLabel,
        };
        //  this.uID=this.elIndex
        //  //console.log(this.uID);
        //  this.elements.push(this.uID)
      } else if (item.name == "name") {
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
          label: item.label
        };
      }
       if (item.name == "Address") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label
        };
      }
       if (item.name == "Heading") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          description:item.description
        };
      }
      if (item.name == "Single Box") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          values:item.values,
          isSelected:item.isSelected
        };
      }
      if (item.name == "Multiple Box") {
        return {
          type: item.type,
          name: item.name,
          id: this.elIndex,
          isRequired: item.isRequired,
          label: item.label,
          values:item.values,
          isSelected:item.isSelected
        };
      }
    },
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
.list-group-item img {
  width: 48px;
  padding: 12px;
  margin-right: 17px;
  filter: invert(1);
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
.desingFormBlockRightt {
  border: 1px solid;
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
