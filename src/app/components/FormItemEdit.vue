<template>
  <div class="form_edit_">
    <div class="row">
      <div class="edit_option" v-if="item.name == 'Dropdown'" >
        <Dropdown-input :item="item" :elementId="elementId" @send-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
      <div class="edit_option" v-else-if="item.name == 'Full Name'">
        <name-input :item="item" :elementId="elementId" @send-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
      <div class="edit_option" v-else-if="item.name == 'Email Address'">
        <email-input :item="item" :elementId="elementId" @send-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
      <div class="edit_option" v-else-if="item.name == 'Phone Number'">
        <number-input :item="item" :elementId="elementId" @send-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
       <div class="edit_option" v-else-if="item.name == 'Address'">
        <address-input :item="item" :elementId="elementId" @send-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
       <div class="edit_option" v-else-if="item.name == 'Heading'">
        <heading-input :item="item" :elementId="elementId" @send-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
       <div class="edit_option" v-else-if="item.name == 'Single Choise'">
        <radio-box-input :item="item" :elementId="elementId" @send-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
       <div class="edit_option" v-else-if="item.name == 'Multiple Box'">
        <check-box-input :item="item" :elementId="elementId" @send-data-id="sendDataId" @delete-data-id="deleteDataId"/>
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
export default {
  props: ["item", "elementId"],

  name: "FormItemEdit",
  components: { NameInput,   DropdownInput, EmailInput, NumberInput, AddressInput, HeadingInput, CheckBoxInput, RadioBoxInput },
  data() {
    return {};
  },
  methods: {
    sendDataId(){
      // alert(this.id)
      this.$emit('send-data-id',this.elementId)
       
    },
    deleteDataId(){
       this.$emit('delete-data-id',this.elementId)
    }
  },
  
};
</script>

<style scoped></style>
