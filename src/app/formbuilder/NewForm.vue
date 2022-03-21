<template>
  <div class="createNewForm">
    <div class="creaetNewFormBtn">
      <button @click="setSelectedComponent('create-form')">Setting</button>
      <button @click="setSelectedComponent('design-form')">Design</button>
      <button @click="setSelectedComponent('publish-form')">Publish</button>
      <button @click="setSelectedComponent('response-form')">Response</button>

    </div>
    <component :is="selectedComponent"></component>
  </div>
</template>
<script>
import CreateForm from "../views/CreateForm.vue";
import DesignForm from "../views/DesignForm.vue";
import PublishForm from "../views/PublishForm.vue";
import ResponseForm from "../views/ResponseForm.vue";

export default {
  data() {
    return {
      selectedComponent: "create-form",
    };
  },
  components: { CreateForm, DesignForm,PublishForm,ResponseForm },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
    },
  },
};
</script>
