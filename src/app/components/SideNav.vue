<template>
  <div class="adminSideNav">
    <div class="adminSideNavUrl">
      <div class="adminUrlLink">
        <div class="">
          <router-link to="/"> Dashboard</router-link>
        </div>

        <div class="">
        <router-link :to=" formId?`/publish/${formId}`:'/'">Link</router-link
        >
        </div>
        <div class="">
          <router-link :to="`/sendmail/${formId}`"> email</router-link>
        </div>
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
.adminSideNav {
  background-color: #192a6b;
  height: calc(100vh - 80px);
  left: 0;
  top: 80px;
  width: 17rem;
  z-index: 9999;
  position: absolute;
}
.adminSideNav .router-link-active {
  color: #fff;
}

.adminSideNav a {
  font-weight: 500;
  display: flex;
  align-items: center;
  color: var(--tertiary-color);
  font-size: 1.1rem;
}
.adminImage {
  padding-bottom: 19px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.384);
  margin: 0 auto;
  margin-bottom: 19px;
  width: 80%;
}

.adminUrlLink a.router-link-active {
  color: #192a6b !important;
  background: #fff;
  position: relative;
}
.adminUrlLink a img {
  filter: brightness(100);
}
.adminUrlLink a.router-link-active img {
  filter: unset;
}
.adminSideNavUrl img {
  margin-right: 15px;
  width: 17px;
}
.adminPicture {
  text-align: center;
  margin-top: 19px;
}
.adminSideNav .adminPicture img {
  width: 48px;
}
.adminSideNav h4 {
  color: #fff;
  text-align: center;
  margin-top: 14px;
  font-weight: 400;
}
.adminUrlLink a {
  padding: 10px 7px 10px 23px;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
}
.adminUrlLink a.router-link-active:after {
  content: "";
  position: absolute;
  right: 0;
  width: 3px;
  height: 100%;
  background: #192a6b;
}
</style>
