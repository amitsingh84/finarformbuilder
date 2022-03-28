<template>
  <div class="designForm">
    <div class="previewForm"><button @click="showPrview">Preview</button></div>

    <show-all-forms
      :items="newElements"
      v-if="showHidePreview"
      @close-page="pageClose"
    />
    <div v-if="!showHidePreview">
      <div class="desingFormBlockRight">
        <form-block-right>
          <draggable
            class="content_block"
            :list="newElements"
            item-key="id"
            group="elements"
            v-bind="dragOptions"
          >
            <template #item="{ element, index }">
              <div>
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
                <name-element-opttions v-if="items.name == 'name'" :item="items" :id="newId" />
                <select-element-setting v-if="items.name == 'select'" :item="items" :id="newId"/>
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
        <json-display class="w-64" :value="elements" />
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
import NameElementOpttions from "../components/NameElementOpttions.vue";
import SelectElementSetting from '../components/SelectElementSetting.vue';
import JsonDisplay from "./JsonDisplay.vue";
import ShowAllForms from "./ShowAllForms.vue";
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
      console.log(this.showHidePreview);
    },
    pageClose() {
      this.showHidePreview = false;
    },
    showElementSetting(userId) {
      for (let value of this.newElements) {
        // console.log("value",value.id);
        // console.log("value",userId);

        if (value.id == userId) {
          this.newId = userId;
          // console.log(value.id);
          // this.showElementSettings = !this.showElementSettings;
          // console.log(this.showElementSettings);
        }

        //        {if(value.id === userId){
        // // console.log("elementId",elementt.id);
        // // console.log("userId",userId);
        // // console.log(this.showElementSettings);
        // this.newId=userId
        //   if(this.showElementSettings==true){
        //     alert(3)
        //     return this.showElementSettings=false
        //   }
        //   else{
        //    console.log(value.id,userId+1);
        //    console.log(this.showElementSettings);
        //     return this.showElementSettings=true
        //   }

        //         }
        //         else{
        //           this.showElementSettings=false
        //         }
        //         }
      }
      // console.log(this.newElements.length)
      //       this.newElements.find(
      //         (elementt) =>
      //         {if(elementt.id === userId + 1){
      // // console.log("elementId",elementt.id);
      // // console.log("userId",userId);
      // // console.log(this.showElementSettings);
      // this.newId=userId
      //   if(this.showElementSettings){
      //     return this.showElementSettings=false
      //   }
      //   else{
      //     return this.showElementSettings=true
      //   }

      //         }
      //         else{
      //           this.showElementSettings=false
      //         }
      //         }
      //       );
    },
    deleteElementData(userId) {
      let index = this.newElements
        .map((x) => {
          console.log(x);
          return x.id;
        })
        .indexOf(userId);
      // console.log(index);
      this.newElements.splice(index, 1);
      // console.log(this.newElements);
    },
    onClone(item) {
      this.elIndex++;
      console.log(this.newElements);
      if (item.name == "select") {
        return { 
          name: item.name,
          id: this.elIndex,
          label: item.label,
          values:item.values,
          defalulValueLabel:item.defalulValueLabel
        };
        //  this.uID=this.elIndex
        //  console.log(this.uID);
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
  height: calc(100vh - 178px);
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
</style>
