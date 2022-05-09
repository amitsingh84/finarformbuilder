<template>
  <div id="element_setting" class="element_setting active">
    <div class="closeBtn">
      <img @click="closeBtn" src="../../../assets/imgs/close.png" alt="" />
    </div>
    <h4>{{item.name}} Element</h4>

    <element-properties accordionHeaderId="1">
      <template v-slot:elementHeading>QUICK SETUP</template>
      <div class="inputLabel">
        <p class="subHeding">Label</p>
        <input type="text" v-model="this.newItem.label" />
      </div>
      <div class="inputLabel">
        <p class="subHeding">subHeading</p>
        <input
          type="text"
          name="nameDesc"
          id="nameDesc"
          v-model="this.newItem.subHeading"
        />
      </div>
      <div class="form-check form-switch requiredStyle">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkrequired"
          v-model="this.newItem.isRequired"
        />
        <p class="form-check-label" for="checkrequired">Required</p>
      </div>
    </element-properties>
    <element-properties accordionHeaderId="2">
      <template v-slot:elementHeading>EDIT CHOICES</template>
      <div>
        <p class="subHeding">Add place holder</p>
        <input
          type="text"
          name="selectdefaul"
          v-model="this.newItem.defalulValueLabel"
        />
      </div>
      <div class="defaultCheckboxtStyle">
        <p class="subHeding">Defalut Choice</p>
        <input
          type="checkbox"
          name="checkDefault"
          :checked="needDefault"
          @click="CheckIfWantDefault"
        />
      </div>
      <div class="optionSelectionStyle">
        <div>
          <p class="subHeding">Select Choice</p>
          <div
            class="optionSelectBoxStyle"
            v-for="(item, index) in newItem.values"
            :key="index"
          >
            <!-- <input type="text" @input="inputData" :index="index" :value="item"/>  -->
            <div class="inputWithDeleteStyle">
              <input
                type="text"
                v-model="this.newItem.values[index].value"
                :name="newItem.values[index].value"
                :class="`dsfsdf_${index}`"
              />
              <button class="deleteStyle" @click="deleteItem(index)">X</button>
            </div>
            <input
              v-if="needDefault"
              type="radio"
              name="default"
              @click="isDataDefault(item, index)"
              :checked="item.value == newItem.defalulValueLabel"
            />
          </div>
          
          <button class="AddButtonStyle" @click="addOptions(id)">+</button>
        </div>
      </div>
    </element-properties>
     <element-properties accordionHeaderId="4">
      <template v-slot:elementHeading>OPTIONS</template>
      <div class="optionsLabelStyle">
        <p>Hide field:</p>
        <input type="checkbox" v-model="this.newItem.hideField" />
      </div>
      <div class="optionsLabelStyle">
        <p>Readonly field:</p>
        <input type="checkbox" v-model="this.newItem.readonlyField" />
      </div>
    </element-properties>
    <div class="Element_setting_option"></div>
  </div>
</template>
<script>
import ElementProperties from "../../slots/ElementProperties.vue";
("use strict");
export default {
  components: { ElementProperties },
  name: "DropdownElementSetting",
  data() {
    return {
      showHideData: false,
      prefix: false,
      newItem: this.item,
      needDefault: true,
      instructionsLabel: "",
      label: "",
      isRequired: false,
      defalulValueLabel: "",
    };
  },

  props: ["id", "item","newElId"],
//  beforeUpdate()
//   {
//     if(this.newItem.values)
//       {
//         this.newItem.values.destroy()
//       }
//   },
  methods: {
    CheckIfWantDefault() {
      this.needDefault = !this.needDefault;
      this.newItem.needDefault=this.needDefault
      if (this.needDefault == false) {
        this.newItem.defalulValueLabel = "select";
      }
    },
    isDataDefault(t, i) {
      this.newItem.defalulValueLabel = t.value;
      console.log(t, i);
    },
    deleteItem(i) {
      this.newItem.values.splice(i, 1);
    },

     
    closeBtn() {
      this.$emit("display-element");
      let title = document.getElementById("element_setting");
      title.classList.remove("active");
    },

    addOptions(id) {
      //  this.newElId.find((item)=>{
      //    console.log(indexOf);
      //  })
        this.newItem.values.push({value:''});
        console.log( this.newItem.values);
        console.log(id);
        console.log(this.newElId);
    },
  },
};
</script>
<style scoped>
.element_setting h4 {
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #fff;
  margin-bottom: 19px;
}
.Element_setting_option {
  padding: 0 30px 30px 30px;
}
  
 
.defaultCheckboxtStyle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0;
}
input[type="text"] {
  width: 100%;
}
  
</style>
