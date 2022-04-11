<template>
    <div>
        <div class="inputNameStyle">
      <p class="inputHeaderStyle">
        <label v-if="item.label">{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <p class="inputSubHeaderStyle">
        <label v-if="item.instructions">{{ item.instructions }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <div class="inputTextArea">
        
        <textarea
          class="input cursorPointerStyle"
          name="Enter Message"
          :placeholder="item.placeholder=='Enter Message'|| item.placeholder==''?'Enter Message':item.placeholder"
          id="`message${id}`" 
          readonly
          :required=item.isRequired
          :rows="item.rowHeight==''|| item.rowHeight<=2 ?3:item.rowHeight"
          :value="item.defalulValueLabel==''?'':item.defalulValueLabel"
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