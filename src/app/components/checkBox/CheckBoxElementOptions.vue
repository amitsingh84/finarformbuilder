<template>
  <div id="element_setting" class="element_setting active">
    <div class="closeBtn">
      <img @click="closeBtn" src="../../../assets/imgs/close.png" alt="" />
    </div>
    <h4>{{item.name}}</h4>
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
    </element-properties>
     <element-properties accordionHeaderId="2">
      <template v-slot:elementHeading>EDIT CHOICES</template>

      <!-- <div class="mb-3 defaultCheckboxtStyle">
        <p>Defalut Choice</p>
        <input
          type="checkbox"
          name="checkDefault"
           v-model="this.newItem.needDefault"
          @click="CheckIfWantDefault"
        />
      </div> -->
      <div class="mb-3 optionSelectionStyle">
        <div  v-if="newItem.id==item.id">
          <p>Select Choice</p>
          <div
            class="optionSelectBoxStyle"
            v-for="(item, index) in newItem.values"
            :key="index"
          >
            <div class="inputWithDeleteStyle">
              <input
                type="text"
                v-model="this.newItem.values[index]"
                :name="item"
              />
              <button class="deleteStyle" @click="deleteItem(index, id)">
                X
              </button>
            </div>
            <input
              v-if="newItem.needDefault"
              type="radio"
              name="default"
              :value="newItem.values[index]"
              v-model="this.newItem.defalulValueLabel"
            />
          </div>
          <button class="AddButtonStyle" @click="addFeild(id)">+</button>
        </div>
      </div>
      <div class="mb-3 defaultCheckboxtStyle">
        <p>Other Choice</p>
        <input
          type="checkbox"
          name="checkDefault"
         v-model="this.newItem.checkIfOtherChoice"
        />
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
      test: "",
    };
  },
  props: ["id", "item"],

  methods: {
    addFeild() {
      this.newItem.values.push(this.test);
    },
    enterLable(e) {
      this.newItem.label = e.target.value;
    },
    //
    deleteItem(index, id) {
      console.log("id", id);
      if (this.newItem.id == id) {
        this.newItem.values.splice(index, 1);
      }
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
