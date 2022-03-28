<template>
  <div>
    <div class="selectStyle">
      <label>{{ item.label }}</label>

      <select class="form-select" aria-label="Default select example">
        <option selected>
          {{
            item.defalulValueLabel == "Select"
              ? "Select"
              : item.defalulValueLabel
          }}
        </option>
        <option v-for="item of item.values" :key="item.value" value="1">
          {{ item.label }}
        </option>
      </select>
      <div>
         
        
          <show-delete-setting @delete-data-id="deleteDataId" @send-data-id="showDataId"/>
         
      </div>
    </div>
  </div>
</template>

<script>
import ShowDeleteSetting from './ShowDeleteSetting.vue';
"use strict";

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
      this.$emit("send-data-id", this.elementId);

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
/* .showElementSetting {
  position: absolute;
  right: -11px;
  top: 70%;
  transform: translateY(-50%);
  background: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #000;
  cursor: pointer;
}
.showElementSettingg {
  position: absolute;
  right: -11px;
  top: 40%;
  transform: translateY(-50%);
  background: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #fff;
  cursor: pointer;
} */
.selectStyle {
  border-radius: 7px;
  border: 1px solid;
  padding: 10px 30px;
  cursor: move;
  position: relative;
  margin: 10px 0;
  padding-bottom: 24px;
}
label {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 7px;
}
</style>
