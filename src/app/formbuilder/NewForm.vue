<template>
  <div class="createNewForm">
    <div class="topHeader"></div>
     <div class="controllerSidenave">a</div>
    <div class="blockSide">
    <div class="creaetNewFormBtn">
      <button @click="setSelectedComponent('create-form')" :class="selectedComponent=='create-form'? 'active':''">Setting</button>
      <button @click="setSelectedComponent('design-form')" :class="selectedComponent=='design-form'? 'active':''">Design</button>
      <button @click="setSelectedComponent('publish-form')" :class="selectedComponent=='publish-form'? 'active':''">Publish</button>
      <button @click="setSelectedComponent('response-form')" :class="selectedComponent=='response-form'? 'active':''">Response</button>

    </div>
    <component :is="selectedComponent"></component></div>
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
       console.log(comp);
      
    },
  },
};
</script>
<style scoped>
.controllerSidenave {
    background-color: #192a6b;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 80px;
    width: 13rem;
}
.blockSide{
  margin-left: 13rem;
    height: calc(100vh - 80px);
    /* overflow: hidden; */
}
.topHeader{
  background-color: #192a6b;
    min-height: 80px;
    display: flex;
    align-items: center;
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 0;
}
.creaetNewFormBtn button {
    background: transparent;
    color: #fff;
    border: transparent;
    padding: 10px 23px;
}
.creaetNewFormBtn { 
    text-align: center;
    background: #192a6b;
    transform: translateY(-44px);
    z-index: 999;
    height: 0;
}
.creaetNewFormBtn button.active {
    background: #a9a9cf;
    color: #192a6b;
    
}
</style>