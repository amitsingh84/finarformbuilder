<template>
  <div id="element_setting" class="element_setting active">
     <div class="closeBtn">
      <img @click="closeBtn" src="../../../assets/imgs/close.png" alt="" />
    </div>
    <h4>{{ item.name }}</h4>
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
      <div class="form-check form-switch requiredStyle">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkrequired"
          v-model="this.newItem.isRequired"
        />
        <p class="form-check-label" for="checkrequired">Required</p>
      </div>
      <!-- <div class="inputLabel">
        <p>Placeholder Value</p>
        <input type="text" v-model="this.newItem.placeholder" />
      </div> -->
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
  </div>
</template>
<script>
import ElementProperties from '../../slots/ElementProperties.vue';
"use strict";
export default {
  components: { ElementProperties },
  data() {
    return {
      showHideData: false,
      prefix: false,
      newItem: this.item,
      addressOptions:'Universal'
    };
  },
  props: ["id", "item"],
  
  methods: {
    enterLable(e) {
      this.newItem.label = e.target.value;
    },
 
    showPrefix() {
      this.newItem.prefix = !this.newItem.prefix;
    },
    closeBtn() {
      this.$emit("display-element");
      let title = document.getElementById("element_setting");
      title.classList.remove("active");
    },
    checkRequired() {
      this.newItem.isRequired = !this.newItem.isRequired;
    },
    
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
.Element_setting_option {
  padding: 0 30px 30px 30px;
}

.inputLablAlign p {
  margin-bottom: 5px;
  font-size: 1.1rem; 
}</style>
