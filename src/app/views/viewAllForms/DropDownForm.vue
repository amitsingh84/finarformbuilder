<template>
  <div>
    <div class="selectStyle">
      <label>{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
      <p v-if="item.subHeading" class="subHeading">{{ item.subHeading }}</p>
      <select class="form-select" aria-label="Default select example">
        <option selected>
          {{
            item.defalulValueLabel == "Select"
              ? "Select"
              : item.defalulValueLabel
          }}
        </option>
        <option
          v-for="(itemm, index) in item.values"
          :key="index"
          value="1"
          :hidden="item.defalulValueLabel == itemm.value"
        >
          {{ itemm.value }}
        </option>
      </select>
       
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
