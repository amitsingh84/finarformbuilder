<template>
     <div style="position:relative;">
         <div class="showElementSetting" @click="showDataId">click</div>
      <div class="showElementSettingg" @click="deleteDataId">delete{{elementId}}</div>
     </div>
</template>
<script>
export default {
    props: ["item","elementId"],
     methods: {
    // showPrefix() {
    //   this.prefix = !this.prefix;
    //   this.items.prefix = this.prefix;
    // },
    deleteDataId(){
      this.$emit('delete-data-id',this.elementId)
    },
    showDataId(){
      this.$emit('send-data-id',this.elementId)
    //   console.log(this.elementId);
      setTimeout(() => {
        
        let newtitle=document.getElementById('element_setting')
        console.log(newtitle);
        newtitle.classList.add("active");
      }, 1);
    },
  },
}
</script>

<style scoped>
.showElementSetting {
  position: absolute;
  right: -11px;
  top: 70%;
  transform: translateY(-50%);
  background: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #000;
  cursor: pointer;
}
.showElementSettingg {
  position: absolute;
  right: -11px;
  top: 40%;
  transform: translateY(-50%);
  background: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #fff;
  cursor: pointer;
}
</style>