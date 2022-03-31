<template>

     <div class="buttonStyle">
         <div class="showElementSetting" @click="showDataId">
            <span>Properties</span>
          </div>
          <div class="showElementSettingg" @click="deleteDataId">
            <span>Remove</span>
          </div>
     </div>
</template>
<script>
export default {
    props: ["item","elementId"],
     methods: {
     deleteDataId(){
      this.$emit('delete-data-id',this.elementId)
    },
    showDataId(){
      console.log(this.elementId);
      this.$emit('send-data-id',this.elementId)
      setTimeout(() => {
        
        let newtitle=document.getElementById('element_setting')
        //console.log(newtitle);
       newtitle.classList.add("active");
      }, 1);
    },
  },
}
</script>

<style scoped>
/* .showElementSetting {
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
} */
.showElementSettingg,
.showElementSetting {
  /* position: absolute;
    right: -11px;
    top: 40%;
    transform: translateY(-50%);
    background: #49515a;
    border-radius: 18px;
    min-width: 34px;
    height: 34px;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
     padding: 0 8px; */
  align-items: center;
  background: #49515a;
  border: 0;
  border-radius: 18px;
  color: #fff;
  display: flex;
  height: 36px;
  justify-content: center;
  margin-bottom: 3px;
  min-width: 36px;
  padding: 0 8px;
  white-space: nowrap;
  /* position: absolute;
    top: 40%;
    transform: translateY(-50%);
    right: -5%; */
  cursor: pointer;
}

.showElementSettingg::before,
.showElementSetting::before {
  content: "";
  display: flex;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  filter: invert(1);
  background-size: contain;
}
.showElementSettingg::before {
  background-image: url(../../assets/imgs/trash.png);
}
.showElementSetting::before {
  background-image: url(../../assets/imgs/gear.png);
}
.showElementSettingg img,
.showElementSetting img {
  width: 18px;
  filter: invert(1);
}
.showElementSettingg span,
.showElementSetting span {
  font-size: 10px;
  /* margin-left: 6px; */
  display: none;
}
.inputLablAlign > div button {
  flex: 1;
}
.buttonStyle {
  background-color: transparent;
  border-radius: 4px;
  bottom: auto;
  box-shadow: none;
  height: auto;
  left: auto;
  min-width: 36px;
  position: absolute;
  right: -18px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  transition: top 0.15s ease, transform 0.15s ease;
  width: 36px;
  z-index: 2;
}
</style>