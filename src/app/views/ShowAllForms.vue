<template>
  <div class="showAllForms">
    <div class="closeBtn">
      <img @click="closePage" src="../../assets/imgs/close.png" alt="" />
    </div>
    <form @submit.prevent="SubmitData">
      <div class="previewFromBlockStyle">
        <div class="perviewBlockSection" v-for="item of items" :key="item.id">
          <!-- {{item.name}} -->
          <div v-if="item.name == 'Full Name'">
            <full-name-form :item="item" />
          </div>           
          <div v-else-if="item.name == 'Email Address'">
            <email-address-form :item="item" />
          </div>
           <div v-else-if="item.name == 'Text Box'">
            <text-form :item="item" />
          </div>
          <div v-else-if="item.name == 'Phone Number'">
            <phone-form :item="item"/>
          </div>
          <div v-else-if="item.name == 'Address'">
           <address-form :item="item"/>
          </div>
          <div v-else-if="item.name == 'Heading'">
            <heading-form :item="item"/>
          </div>
           
          <div v-else-if="item.name == 'Dropdown'">
            <drop-down-forms :item="item" />
          </div>
           <div v-else-if="item.name == 'Single Selection'">
            <single-choice-form :item="item" />
          </div>
           <div v-else-if="item.name == 'Multiple Selection'">
            <multiple-choice-form :item="item" />
          </div>
           <div v-else-if="item.name == 'Message'">
            <message-form :item="item" />
          </div>
           <div v-else-if="item.name == 'Date & Time'">
            <date-form :item="item" />
          </div>
        </div>
        <div class="submitBtn">

        <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import AddressForm from './viewAllForms/AddressForm.vue';
import DateForm from './viewAllForms/DateForm.vue';
import DropDownForms from "./viewAllForms/DropDownForm.vue";
import EmailAddressForm from "./viewAllForms/EmailAddressForm.vue";
import FullNameForm from "./viewAllForms/FullNameForm.vue";
import HeadingForm from "./viewAllForms/HeadingForm.vue";
import MessageForm from './viewAllForms/MessageForm.vue';
import MultipleChoiceForm from './viewAllForms/MultipleChoiceForm.vue';
import PhoneForm from "./viewAllForms/PhoneForm.vue";
import SingleChoiceForm from './viewAllForms/SingleChoiceForm.vue';
import TextForm from './viewAllForms/TextForm.vue';
export default {
  components: {
    DropDownForms,
    FullNameForm,
    EmailAddressForm,
    PhoneForm,
    HeadingForm,
    AddressForm,
    SingleChoiceForm,
    MultipleChoiceForm,
    MessageForm,
    DateForm,
    TextForm,
  },
  data() {
    return {
      userData:[]
    }
  },
  props: ["items"],
  methods: {
    closePage() {
      this.$emit("close-page");
      //console.log('close');
    },
    SubmitData() {
      console.log(this.items);
    },
  },
  mounted() {
    console.log(this.items);
    console.log(this.userData);
  },
  created(){
    console.log(this.$route.params.data)
    this.userData=this.$route.params.data
  }
};
</script>
<style scoped>
.closeBtn img {
  width: 34px;
  background: #fff;
  padding: 10px;
  cursor: pointer;
  filter: invert(1);
}
.closeBtn {
  text-align: right;
}
.previewFromBlockStyle {
 padding: 27px;
    
    border-radius: 7px;
    overflow-y: scroll;
    height: calc(100vh - 136px);
    width: 70%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 1px 1px 6px #e8dddd;
}
.previewFromBlockStyle::-webkit-scrollbar {
  width: 0;
}
.submitBtn button { 
    background: #192a6b;
    border: none;
    color: #fff;
    padding: 10px 24px;
    font-weight: 600;
    border-radius: 7px;
}
p.nameLabel {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 4px;
}

.inputFullNameRow {
  display: flex;
  gap: 17px;
}

.inputFullNameRow input {
  flex: 1;
  height: 48px;
  border-radius: 7px;
  border: 1px solid #000;
  padding-left: 10px;
}
.perviewBlockSection {
  margin: 17px 0;
}
</style>
