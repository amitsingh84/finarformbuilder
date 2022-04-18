<template>
     <div class="nameForm" :hidden="item.hideField" >
          
          <p class="nameLabel">
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
          </p>
          <p v-if="item.subHeading" class="subHeading">{{item.subHeading}}</p>
          <div class="inputFullNameRow">
            <select name="selectprfix" id="selectTitle" v-if="item.prefix">
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
            </select>
            <div>

            <input
              class="input cursorPointerStyle"
              name="first name"
              :placeholder="item.fplaceholder==null?'First Name':item.fplaceholder"
              id="fname"
              type="text"
              @blur="firstNameValidation"
              v-model="firstName"
              :required=item.isRequired
            />
           <p class="invalidText" v-if="invalidFData=='invalid'">This First Name Feild is required</p>
            </div>
            <div>

            <input
              type="text"
              name="last name"
              id="lname"
              :placeholder="item.fplaceholder==null?'First Name':item.lplaceholder"
              @blur="lastNameValidation"
                v-model="lastName"
              class="cursorPointerStyle"
              :required=item.isRequired
            />
           <p class="invalidText" v-if="invalidLData=='invalid'">This Last Name Feild is required</p>
          </div>
            </div>
        </div>
</template>

<script>
export default {
    props:['item'],
     data() {
    return {
     newItem:this.item,
     firstName:'',
     lastName:'',
     invalidFData:'pending',
     invalidLData:'pending',
      
    };
  },
  methods: {
    firstNameValidation(){
      if(this.newItem.isRequired==true){
        // console.log(this.emailValue);
        if (this.firstName=='') {
              this.invalidFData="invalid"
         } else {
             this.invalidFData="valid"
         }
      }
 },
 lastNameValidation(){
      if(this.newItem.isRequired==true){
        // console.log(this.emailValue);
        if (this.lastName=='') {
              this.invalidLData="invalid"
         } else {
             this.invalidLData="valid"
         }
      }
 }
  },
}
</script>