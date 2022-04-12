<template>
    <div>
        <div class="inputNameStyle inputCheckbox">
      <p :style="!item.align ? 'text-align:left;' : `text-align:${item.align}`">
        <label>{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <div class="inputFullNameRow">

        <div class="form-check" v-for="(data,i) in item.values" :key="i">
            
          <input
            class="form-check-input"
            type="radio"
            :value="data"
            id="flexCheckDefault"
            @input="checkBoxData"
            :checked="data.isSelected"
           readonly
           name="t"
          />
          <label class="form-check-label" for="flexCheckDefault">
            {{data}}
          </label>
        </div>

        
      </div>
    </div> 
    </div>
</template>
<script>
export default {
    props:['item']
}
</script>