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
        <p>Insturctions</p>
        <input
          type="text"
          name="nameDesc"
          id="nameDesc"
          v-model="this.newItem.Insturctions"
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

      <div class="mb-3 defaultCheckboxtStyle">
        <p>Defalut Choice</p>
        <input
          type="checkbox"
          name="checkDefault"
           v-model="this.newItem.needDefault"
          :checked="needDefault"
          @click="CheckIfWantDefault"
        />
      </div>
      <div class="mb-3 optionSelectionStyle">
        <div  v-if="newItem.id==item.id">
          <p>Select choise</p>
          <div
            class="optionSelectBoxStyle"
            v-for="(item, index) in newItem.values"
            :key="index"
          >
            <!-- <input type="text" @input="inputData" :index="index" :value="item"/>  -->
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
              v-if="needDefault"
              type="radio"
              name="default"
              @click="isDataDefault(item, index)"
              :checked="item.value == newItem.defalulValueLabel"
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
          @click="CheckIfOtherChoise"
        />
      </div>
    </element-properties>

    <!-- <div class="inputLablAlign">
        <p>Label Align</p>
        <div>
          <button @click="checkAlign" value="left">Left</button
          ><button @click="checkAlign" value="center">Center</button
          ><button value="right" @click="checkAlign">Right</button>
        </div>
      </div> -->
  </div>
</template>
<script>
"use strict";
import ElementProperties from "../../slots/ElementProperties.vue";
export default {
  components: { ElementProperties },
  data() {
    return {
      showHideData: false,
      prefix: false,
      newItem: this.item,
      test: "",
      needDefault: true,
    };
  },
  props: ["id", "item"],

  methods: {
    CheckIfWantDefault() {
      this.needDefault = !this.needDefault;
      if (this.needDefault == false) {
        this.newItem.defalulValueLabel = "select";
      }
    },
    addFeild(id) {
      //  let newData= this.newItem.values.find(element => element);
      // console.log(this.newItem.indexOf(this.newItem));
      this.newItem.values.push(this.test)
      console.log(id);
    },
    enterLable(e) {
      this.newItem.label = e.target.value;
    },
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
    CheckIfOtherChoise() {
      this.newItem.values.push("Others");
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
  font-size: 1.1rem;
}

.inputLabel input {
  width: 100%;
  height: 30px;
  border: none;
}

.inputLabel,
.inputLablAlign {
  margin-bottom: 17px;
}
</style>
