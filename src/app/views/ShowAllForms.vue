<template>
  <div class="showAllForms">
      <button @click="closePage">close</button>
      <form @submit.prevent="submitData">
    <div v-for="item of items" :key="item.id">
      <!-- {{item.name}} -->
      <div v-if="item.name == 'name'">
        <div>
          <p>
            <label for="">{{ item.label }}</label>
          </p>
          <div class="inputFullNameRow">
            <select name="selectprfix" id="selecttitle" v-if="item.prefix">
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
            </select>
            <input
              class="input cursorPointerStyle"
              name="first name"
              placeholder="First Name"
              id="fname"
              type="text"
              required
              @blur="nameInputValidation"
               
            />
            <p v-if="useNameValidity=='invalid'">Input Error</p>
            <input
              type="text"
              name="last name"
              id="lname"
              placeholder="Last Name"
              
              class="cursorPointerStyle"
              
            />
          </div>
        </div>
      </div>
      <div v-else-if="item.name == 'heading'">Heading</div>
      <div v-else-if="item.name == 'Email Address'">email</div>
      <div v-else>Number</div>

    </div>
    <button type="submit">Sumbit</button>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
useNameValidity:''
    }
  },
  props: ["items"],
methods: {
    closePage(){
        this.$emit('close-page')
        console.log('close');
    },
    submitData(){
      
      console.log('submit');
      
    },
    nameInputValidation(e){
      // if(this.items.isRequired==true){
        
      // }
      for (const item of this.items) {
        if(item){
          item.isRequired=true
          if(item.isRequired==true){

            if(e.target.value.trim()===''){
              this.useNameValidity='invalid'
              console.log(item.isRequired);
            }
            else{
              this.useNameValidity='valid'
            }
          }
      else{
        console.log("do");
      }
        }
        
      }
       
    }
},

};
</script>
