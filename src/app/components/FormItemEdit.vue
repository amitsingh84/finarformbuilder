<template>
  <div class="form_edit_">
    <div class="row">
      <div class="edit_option" v-if="item.name == 'Dropdown'" >
         
        <Dropdown-input :id="'testId'+checkId" class="checka" :class="checkNewId?'tt':'ttt'" :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
         
      </div>
      <div class="edit_option" v-else-if="item.name == 'Full Name'">
        <name-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
      <div class="edit_option" v-else-if="item.name == 'Email Address'">
        <email-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
       <div class="edit_option" v-else-if="item.name == 'Text Box'">
        <text-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
      <div class="edit_option" v-else-if="item.name == 'Phone Number'">
        <number-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
       <div class="edit_option" v-else-if="item.name == 'Address'">
        <address-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
       <div class="edit_option" v-else-if="item.name == 'Heading'">
        <heading-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
       <div class="edit_option" v-else-if="item.name == 'Single Selection'">
        <radio-box-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
       <div class="edit_option" v-else-if="item.name == 'Multiple Selection'">
        <check-box-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
      <div class="edit_option" v-else-if="item.name == 'Message'">
        <message-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
      <div class="edit_option" v-else-if="item.name == 'Date & Time'">
        <date-input :item="item" :elementId="elementId" @show-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
      <div v-else><p>not input</p></div>
    </div>
  </div>
</template>

<script>
import AddressInput from './addressElement/AddressInput.vue';
import CheckBoxInput from './checkBox/CheckBoxInput.vue';
import EmailInput from './emailElement/EmailInput.vue';
import HeadingInput from './Heading/HeadingInput.vue';
// import HeadingInput from "./HeadingInput.vue";
import NameInput from "./nameElement/NameInput.vue";
import NumberInput from './numberElement/NumberInput.vue';
import DropdownInput from './dropdownElement/DropdownInput.vue';
import RadioBoxInput from './radioBox/RadioBoxInput.vue';
import MessageInput from './messageElement/MessageInput.vue';
import DateInput from './dateElement/DateInput.vue';
import TextInput from './textElement/TextInput.vue';
export default {
  props: ["item", "elementId"],

  name: "FormItemEdit",
  components: { NameInput,   DropdownInput, EmailInput, NumberInput, AddressInput, HeadingInput, CheckBoxInput, RadioBoxInput, MessageInput, DateInput, TextInput },
  data() {
    return {
      checkId:this.elementId,
      newId:null,
      checked:false,
      newItem:this.item
    };
  },
  methods: {
    checkChecked(){
      // if(checked){
        console.log(this.checked);
      // }
    },
//     someData(id){
//  let findData=document.getElementById('testId'+id)
//  console.log(this.newItem);
//       if(id==this.checkId){
//         findData.classList.add('active')
//         // console.log(this.findData.parentNode);
//       }
//       // if(id!=this.checkId){
//       //   findData.classList.remove('active')
//       // }
//     },
    showElementSetting(userId) {
      for (let value of this.newElements) {
        if (value.id == userId) {
          this.newId = userId;
          this.showAllElementNames = false;
        }
      }
    },
    sendDataId(id){
      // alert(this.id)
      this.newId=id
      this.$emit('show-data-id',id)
      console.log(this.newId);
       
    },
    deleteDataId(){
       this.$emit('delete-data-id',this.elementId)
    }
  },
  mounted() {
    console.log(this.checked);
  },
  computed:{
    checkNewId(){
     
      if(this.checked){
        console.log(this.checked);
        
        return this.checked
      }
      else{
        return false
      }
    }
  }
};
</script>

<style scoped>
.active{
  background: yellow;
}
</style>
