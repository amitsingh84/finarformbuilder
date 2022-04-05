<template>
  <div id="element_setting" class="element_setting active">
    <div class="closeBtn">
      <img @click="closeBtn" src="../../../assets/imgs/close.png" alt="" />
    </div>
    <h4>{{item.name}} Element</h4>

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
      <div>
        <p>Add place holder</p>
        <input
          type="text"
          name="selectdefaul"
          v-model="this.newItem.defalulValueLabel"
        />
      </div>
      <div class="defaultCheckboxtStyle">
        <p>Defalut Choice</p>
        <input
          type="checkbox"
          name="checkDefault"
          :checked="needDefault"
          @click="CheckIfWantDefault"
        />
      </div>
      <div class="optionSelectionStyle">
        <div>
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
                v-model="this.newItem.values[index].value"
                :name="item"
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
          <button class="AddButtonStyle" @click="addOptions">+</button>
        </div>
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
      test: {
        value: "",
        isDefault: false,
      },
      instructionsLabel: "",
      label: "",
      isRequired: false,
      defalulValueLabel: "",
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
    isDataDefault(t, i) {
      this.newItem.defalulValueLabel = t.value;
      console.log(t, i);
    },
    deleteItem(i) {
      this.newItem.values.splice(i, 1);
    },

    // enterDefalutLable(e) {
    //   this.newItem.defalulValueLabel = e.target.value;
    // },
    closeBtn() {
      this.$emit("display-element");
      let title = document.getElementById("element_setting");
      title.classList.remove("active");
      //console.log("title", title);
    },

    addOptions() {
      this.newItem.values.push(this.test);
      this.test = {
        value: "",
        isDefault: false,
      };
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
  /* font-weight: 600; */
}

.inputLabel input {
  width: 100%;
  height: 30px;
  /* border-radius: 7px; */
  border: none;
  padding-left: 10px;
  color: #333;
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
.defaultCheckboxtStyle p {
  margin-bottom: 0;
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

button.deleteStyle {
  position: absolute;
  right: 0;
  background: transparent;
  border: none;
  font-weight: 600;
  color: gray;
  font-family: cursive;
  top: 50%;
  transform: translateY(-50%);
}

.inputWithDeleteStyle {
  position: relative;
}
.optionSelectBoxStyle div {
  flex: 1;
  margin-bottom: 10px
}
.optionSelectBoxStyle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
}
p {
  margin-bottom: 4px;
}
.defaultCheckboxtStyle input {
  outline: 1px solid #fff;
}
button.AddButtonStyle {
  margin-top: 12px;
  width: 100%;
  background: #192a6b;
  border: none;
  padding: 0;
  font-size: 30px;
  font-weight: 800;
  font-family: cursive;
  color: #fff;
  line-height: 37px;
}
.closeBtn img {
  width:34px;
  background: #fff;
  padding: 10px;
  cursor: pointer;
}
.closeBtn {
  text-align: right;
}
</style>
