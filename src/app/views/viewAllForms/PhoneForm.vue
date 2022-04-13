<template>
    <div>
         <div class="nameForm"  :hidden="item.hideField">
          
          <p class="nameLabel" :style="`text-align:${item.align}`">
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
          </p>
          <p v-if="item.instructions" class="instructionStyle">{{item.instructions}}</p>
          <div class="inputFullNameRow">
             
            <input
              class="input cursorPointerStyle"
              name="Enter Number"
              :placeholder="item.placeholder==null || item.placeholder==''?'Enter Number':item.placeholder"
              id="number"
              type="tel"
              v-model="phoneValue"
              @blur="checkValidation"
              :required=item.isRequired
              :readonly="item.readonlyField"
              
            /> 
            
          </div>
          <p class="invalidText" v-if="invalidData=='invalid'">This Phone Feild is required</p>
            <p class="invalidText" v-if="invalidData=='invalidd'">Enter Valide Phone Number</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['item'],
     data() {
    return {
     newItem:this.item,
     phoneValue:'',
     invalidData:'pending'
    };
  },
  methods: {
    checkValidation(){
      if(this.newItem.isRequired==true){
        console.log(this.phoneValue);
     
        if (this.phoneValue=='') {
              this.invalidData="invalid"
         }
        //   else if(this.validNumber){
        //   console.log(this.phoneValue.match(validNumber))
        //    this.invalidData="invalidd"
        //  }
          else {
             this.invalidData="valid"
         }
        
         
      }
 }
  },
}
</script>