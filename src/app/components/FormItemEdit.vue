<template>
  <div class="form_edit_">
    <div class="row">
      <div class="edit_option" v-if="item.name == 'heading'">
        <heading-input />
      </div>
      <div class="edit_option" v-else-if="item.name == 'name'">
        <name-input :item="item" :elementId="elementId" @send-data-id="sendDataId" @delete-data-id="deleteDataId"/>
      </div>
      <div class="edit_option" v-else-if="item.name == 'Email Address'">
        <email-input />
      </div>
      <div class="edit_option" v-else-if="item.name == 'Phone Number'">
        <number-input />
      </div>
      <div v-else><p>not input</p></div>
    </div>
  </div>
</template>

<script>
import EmailInput from "./EmailInput.vue";
import HeadingInput from "./HeadingInput.vue";
import NameInput from "./NameInput.vue";
import NumberInput from "./NumberInput.vue";
export default {
  props: ["item", "elementId"],

  name: "FormItemEdit",
  components: { NameInput, HeadingInput, EmailInput, NumberInput },
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
