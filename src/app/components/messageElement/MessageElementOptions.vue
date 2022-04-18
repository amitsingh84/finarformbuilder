<template>
  <div id="element_setting" class="element_setting active">
    <div class="closeBtn">
      <img @click="closeBtn" src="../../../assets/imgs/close.png" alt="" />
    </div>
    <h4>{{ newItem.name }} Element</h4>

    <element-properties accordionHeaderId="1">
      <template v-slot:elementHeading>QUICK SETUP</template>
      <div class="inputLabel">
        <p>Label</p>
        <input type="text" v-model="this.newItem.label" />
      </div>
      <div class="inputLabel">
        <p>Sub Heading</p>
        <input
          type="text"
          name="nameDesc"
          id="nameDesc"
          v-model="this.newItem.subHeading"
        />
      </div>
       <div class="inputLabel">
        <p>Placeholder</p>
        <input type="text" v-model="this.newItem.placeholder" />
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
      <template v-slot:elementHeading>VALIDATION</template>
<div class="validationSectionStyle">
<div class="inputLabel">
        <p>Min no. of characters:</p>
        <input type="number" v-model="this.newItem.minNumberChar" />
      </div>
      <div class="inputLabel">
        <p>Max no. of characters:</p>
        <input type="number" v-model="this.newItem.maxNumberChar" />
      </div>
      <div class="inputLabel">
        <p>Min no. of words:</p>
        <input type="number" v-model="this.newItem.minNumberWord" />
      </div>
      <div class="inputLabel">
        <p>Max no. of words:</p>
        <input type="number" v-model="this.newItem.maxNumberWord" />
      </div>
</div>
       
     </element-properties>

      <element-properties accordionHeaderId="3">
      <template v-slot:elementHeading>PREFILL</template>
<div class="prefillSectionStyle">
<div class="inputLabel">
        <p>Prefilled value</p>
        <textarea v-model="this.newItem.defalulValueLabel" />
      </div>
      
</div>
       
     </element-properties>
     <element-properties accordionHeaderId="4">
      <template v-slot:elementHeading>OPTIONS</template>
<div class="optionSectionStyle">
<div class="optionLabelText">
        <p>Input height in rows:</p>
        <input type="number" v-model="this.newItem.rowHeight" />
      </div>
      <div class="optionLabelField">
        <p>Hide field:</p>
        <input type="checkbox" v-model="this.newItem.hideField" />
      </div>
      <div class="optionLabelField">
        <p>Readonly field:</p>
        <input type="checkbox" v-model="this.newItem.Readonly" />
      </div>
       
</div>
       
     </element-properties>
  </div>
</template>
<script>
import ElementProperties from "../../slots/ElementProperties.vue";
("use strict");
export default {
  components: { ElementProperties },
  data() {
    return {
      showHideData: false,
      prefix: false,
      newItem: this.item,
      label: "",
      isRequired: false,
    };
  },
  props: ["id", "item"],
  // watch: {
  //   tt() {
  //     this.newItem.label = this.enterLable;
  //   },
  // },
  methods: {
    enterLable(e) {
      this.newItem.label = e.target.value;
    },

    showPrefix() {
      // this.prefix = !this.prefix;
      this.newItem.prefix = !this.newItem.prefix;
    },
    closeBtn() {
      this.$emit("display-element");
      let title = document.getElementById("element_setting");
      title.classList.remove("active");
      //console.log("title", title);
    },
    checkRequired() {
      this.newItem.isRequired = !this.newItem.isRequired;
    },
    // showElementSetting() {
    //   let newtitle = document.getElementById("element_setting");
    //   newtitle.classList.add("active");
    //   //console.log("title", newtitle);
    // },
    checkAlign(e) {
      console.log(e);
      console.log(this.newItem);
      this.newItem.align = e.target.value;
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
 
 .validationSectionStyle .inputLabel input {
    flex: .3;
}
.validationSectionStyle .inputLabel p {
    flex: 1;
}
.validationSectionStyle .inputLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
  
</style>
