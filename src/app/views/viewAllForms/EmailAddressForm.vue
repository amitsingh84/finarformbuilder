<template>
    <div>
        <div class="inputNameStyle"  :hidden="item.hideField">
          <p>
        <label >{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <p class="instructionStyle">{{item.instructions}}</p>
      <div class="inputFullNameRow">
        
        <input
          class="input cursorPointerStyle"
          :class="{invalidInputStyle:invalidData=='invalid'}"
          name="Enter Email"
          :placeholder="!item.placeholder || item.placeholder==''?'Enter Email':item.placeholder"
          id="email"
          type="text"
          :required=item.isRequired
          @blur="checkValidation"
          :readonly="item.readonlyField"
         
        />
         
      </div>
              <p class="invalidText" v-if="invalidData=='invalid'">This Email Feild is required</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['item'],
    data() {
    return {
     newItem:this.item,
     emailValue:'',
     invalidData:'pending'
      
    };
  },
  methods: {
    checkValidation(){
      if(this.newItem.isRequired==true){
        console.log(this.emailValue);
        if (this.emailValue=='') {
              this.invalidData="invalid"
         } else {
           
             this.invalidData="valid"
         }
      }
 }
  },
}
</script>