<template>
  <div>
      <div class="selectStyle">
        <label>{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
        <p v-if="item.subHeading" class="subHeading">{{item.subHeading}}</p>
        <select class="form-select" aria-label="Default select example">
          <option selected >
            {{
              item.defalulValueLabel == "Select"
                ? "Select"
                : item.defalulValueLabel
            }}
          </option>
          <option
            v-for="(elementValue, index) in item.values"
            :key="index"
            :value="elementValue.value"
            :hidden="item.defalulValueLabel == elementValue.value"
          >
            {{ elementValue.value }}
          </option>
        </select>
        <div>
          <show-delete-setting
            @delete-data-id="deleteDataId"
            @show-data-id="showDataId"
          />
        </div>
      </div>
  </div>
</template>

<script>
import ShowDeleteSetting from "../ShowDeleteSetting.vue";
("use strict");

// import ShowDeleteSetting from './ShowDeleteSetting.vue';
export default {
  components: { ShowDeleteSetting },
  props: ["item", "elementId"],

  methods: {
    // showPrefix() {
    //   this.prefix = !this.prefix;
    //   this.items.prefix = this.prefix;
    // },
    deleteDataId() {
      this.$emit("delete-data-id", this.elementId);
    },
    showDataId() {
      this.$emit("show-data-id", this.elementId);

      //console.log(this.elementId);
      setTimeout(() => {
        let newtitle = document.getElementById("element_setting");
        //console.log(newtitle);
        newtitle.classList.add("active");
      }, 1);
    },
  },
  //   components: { ShowDeleteSetting },
};
</script>
<style scoped>
.selectStyle:hover {
  background: #bfb6b645;
}
.selectStyle {
  border-radius: 7px;
  /* border: 1px solid; */
  padding: 14px 30px;
  cursor: move;
  position: relative;
  margin: 4px 0;
  /* padding-bottom: 24px; */
}
.selectStyle:hover .buttonStyle {
  display: unset;
}
.buttonStyle {
  display: none;
}
label {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 7px;
}
</style>
