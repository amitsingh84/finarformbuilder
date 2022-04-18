<template>
  <div>
    <div class="inputNameStyle inputCheckbox" :hidden="item.hideField">
      <p>
        <label
          >{{ item.label == "radio" ? "Single Selection" : item.label
          }}<sup v-if="item.isRequired">*</sup></label
        >
      </p>

      <div class="form-check">
        <div class="formCheckStyle row">
          <div class="col-md-6" v-for="(data, i) in item.values" :key="i">
            <input
              class="form-check-input"
              type="radio"
              :value="data"
              :id="`flexCheckDefault_${i}`"
              @input="checkBoxData"
              :checked="data==newItem.defalulValueLabel"
              name="Single Selection"
               
            />
             
            <label
              class="form-check-label"
              :for="`flexCheckDefault_${i}`"
               
            >
              {{ data }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      newItem:this.item
    }
  },
};
</script>
