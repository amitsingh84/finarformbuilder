<template>
    <div>
        <div class="emailForm">
          
          <p class="nameLabel">
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
          </p>
          <div class="inputFullNameRow">
             
            <input
              class="input cursorPointerStyle"
              :class="{invalidInputStyle:invalidData=='invalid'}"
              name="first name"
              placeholder="Enter Email"
              id="email"
              type="email"
              v-model.trim="emailValue"
              :required=item.isRequired
              @blur="checkValidation"
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