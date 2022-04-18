<template>
    <div :hidden="item.hideField">
        <div class="inputNameStyle">
      <p class="inputHeaderStyle">
        <label v-if="item.label">{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <p class="inputSubHeaderStyle">
        <label v-if="item.subHeading">{{ item.subHeading }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <div class="inputTextArea">
        
        <textarea
          class="input"
          name="Enter Message"
          :placeholder="item.placeholder=='Enter Message'|| item.placeholder==''?'Enter Message':item.placeholder"
          :id="`message${item.id}`" 
          :readonly="item.Readonly"
          :required=item.isRequired
          :rows="item.rowHeight==''|| item.rowHeight<=2 ?3:item.rowHeight"
          :value="item.defalulValueLabel==''?'':item.defalulValueLabel"
          :minlength="item.minNumberChar==null?'':item.minNumberChar"
          :maxlength="item.maxNumberChar==null?'':item.maxNumberChar"
        />
         
      </div>
      
    </div>
    </div>
</template>
<script>
export default {
    props:['item']
}
</script>