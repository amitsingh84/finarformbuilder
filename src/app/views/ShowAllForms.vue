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
          <div v-else-if="item.name == 'Phone Number'">
            <phone-form :item="item"/>
          </div>
          <div v-else-if="item.name == 'Address'">
           <address-form :item="item"/>
          </div>
          <div v-else-if="item.name == 'Heading'">
            <heading-form :item="item"/>
          </div>
          <div v-else-if="item.name == 'select'"></div>
          <div v-else-if="item.name == 'Dropdown'">
            <drop-down-forms :item="item" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import AddressForm from './viewAllForms/AddressForm.vue';
import DropDownForms from "./viewAllForms/DropDownForm.vue";
import EmailAddressForm from "./viewAllForms/EmailAddressForm.vue";
import FullNameForm from "./viewAllForms/FullNameForm.vue";
import HeadingForm from "./viewAllForms/HeadingForm.vue";
import PhoneForm from "./viewAllForms/PhoneForm.vue";
export default {
  components: {
    DropDownForms,
    FullNameForm,
    EmailAddressForm,
    PhoneForm,
    HeadingForm,
    AddressForm,
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
  padding: 17px;
  border: 1px solid;
  margin: 17px;
  border-radius: 7px;
  overflow-y: scroll;
  height: calc(100vh - 188px);
}
.previewFromBlockStyle::-webkit-scrollbar {
  width: 0;
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
