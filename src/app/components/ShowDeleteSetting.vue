<template>

     <div class="buttonStyle">
         <div class="showElementSetting" @click="showDataId(elementId)">
            
          </div>
          <div class="deleteElementSetting" @click="deleteDataId(elementId)">
             
          </div>
     </div>
</template>
<script>
export default {
    props: ["item","elementId"],
     methods: {
     deleteDataId(id){
       console.log('newIdd',id);
      this.$emit('delete-data-id',id)
    },
    showDataId(id){
      console.log('newIddds',id);
      this.$emit('show-data-id',id)
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
.deleteElementSetting,
.showElementSetting {
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
  cursor: pointer;
}

.deleteElementSetting::before,
.showElementSetting::before {
  content: "";
  display: flex;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  filter: invert(1);
  background-size: contain;
}
.deleteElementSetting::before {
  background-image: url(../../assets/imgs/trash.png);
}
.showElementSetting::before {
  background-image: url(../../assets/imgs/gear.png);
}
.deleteElementSetting img,
.showElementSetting img {
  width: 18px;
  filter: invert(1);
}
.deleteElementSetting span,
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