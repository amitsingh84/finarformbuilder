<template>
  <div class="createNewForm">
    <div class="topHeader"></div>
    <!-- <div class="controllerSidenave">a</div> -->
    <div class="">
      <div class="creaetNewFormBtn">
        <router-link to="/forms">Setting</router-link>
        <router-link
          :to="title && level ?`/form-design/${title},${level},${formType},${formProtection}`:'/#'"
          :style="title && level?'pointer-events: unset; ':'pointer-events: none; '">Design</router-link
        >
        <router-link :to="formId?`/publishform/${formId}`:'/#'" :style="title && formId?'pointer-events: unset; ':'pointer-events: none; '">Publish</router-link>
        <router-link to="/response">Response</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedComponent: "create-form",
      title: "",
      level: "",
      formType: "",
      formProtection: "",
      formId:""
    };
  },

  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
      console.log(comp);
    },
  },
  mounted() {
    this.title = this.$route.params.title;
    //  if(this.title=='undefined'){
    //  this.$router.push("/forms")
    // }
    this.formId=this.$route.params.formId
      this.level = this.$route.params.level;
      this.formType = this.$route.params.formtype;
      this.formProtection = this.$route.params.formProtection;
    console.log(this.$route.path);
   
    
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
.blockSide {
  margin-left: 13rem;
  height: calc(100vh - 80px);
  /* overflow: hidden; */
}
.topHeader {
  background-color: #192a6b;
  min-height: 80px;
  display: flex;
  align-items: center;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 0;
}
.creaetNewFormBtn a {
  color: #fff;
  border: transparent;
  padding: 10px 23px;
  text-decoration: none;
}
.creaetNewFormBtn {
  text-align: center;
  background: #192a6b;
  transform: translateY(-33px);
  z-index: 999;
  height: 0;
}
.creaetNewFormBtn a.router-link-active {
  background: #a9a9cf;
  color: #192a6b;
}
.creaetNewFormBtn a {
 cursor: pointer !important;
}
</style>