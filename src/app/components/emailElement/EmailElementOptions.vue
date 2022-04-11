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
        <p>instructions</p>
        <input
          type="text"
          name="nameDesc"
          id="nameDesc"
          v-model="this.newItem.instructions"
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
      <div class="inputLabel">
        <p>Placeholder Value</p>
        <input type="text" v-model="this.newItem.placeholder" />
      </div>
    </element-properties>
    <element-properties accordionHeaderId="2">
      <template v-slot:elementHeading>VALIDATION</template>
      <div class="inputLabel validationStyle">
        <div>
          <p>Min no. of characters:</p>
          <input type="number" v-model="this.newItem.emailMininumChar" />
        </div>
        <div>
          <p>Max no. of characters:</p>
          <input type="number" v-model="this.newItem.emailMaxChar" />
        </div>
      </div>
    </element-properties>
  <!-- <element-properties accordionHeaderId="3">
      <template v-slot:elementHeading>PREFILL</template>
      <div class="inputLabel">
        <p>Label</p>
        <input type="text" v-model="this.newItem.label" />
      </div>
      
    </element-properties> -->
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
    <!-- <div class="Element_setting_option"> -->

    <!-- <div class="inputLablAlign">
        <p>Label Align</p>
        <div>
          <button @click="checkAlign" value="left">Left</button
          ><button @click="checkAlign" value="center">Center</button
          ><button value="right" @click="checkAlign">Right</button>
        </div>
      </div> -->

    <!-- </div> -->
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
      instructionsLabel: "",
      label: "",
      isRequired: false,
      defalulValueLabel: "",
      placeholder: "",
      emailMaxChar:'',
      emailMininumChar:'',
      readonlyField:false,
      hideField:false
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
.optionsLabelStyle p {
    flex: 1;
}
.optionsLabelStyle {
    display: flex;
}
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
  font-size: 1.1rem;
}

.inputLabel input {
  width: 100%;
  height: 30px;
  border: none;
  padding-left: 10px;
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
  width: 0;
  z-index: 99;
  background: #6868ac;
  color: #fff;
  transition: 0.3s;
  display: none;
  transform: translateX(-30%);
}
.element_setting.active {
  position: absolute;
  right: 0;
  top: 0;
  width: 30%;
  z-index: 99;
  background: #6868ac;
  color: #fff;
  display: block;
  transform: translateX(0);
  height: calc(100vh - 80px);
  overflow: hidden;
  overflow-y: scroll;
}
.element_setting.active::-webkit-scrollbar {
  display: none;
}
.closeBtn img {
  width: 34px;
  background: #fff;
  padding: 10px;
  cursor: pointer;
}
.closeBtn {
  text-align: right;
}
</style>
