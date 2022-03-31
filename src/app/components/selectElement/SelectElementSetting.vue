<template>
  <div id="element_setting" class="element_setting active">
    <button @click="closeBtn">close</button>
    <h4>Element Setting{{ id }}</h4>
    <div class="Element_setting_option">
      <div class="inputLabel">
        <p>Label</p>
        <input
          type="text"
          @input="enterLable"
          :value="item.label == 'Select' ? '' : item.label"
        />
      </div>
      <div class="inputLablAlign">
        <p>Label Align</p>
        <div>
          <button>Left</button><button>Center</button><button>Right</button>
        </div>
      </div>

      <div class="form-check form-switch requiredStyle">
        <input class="form-check-input" type="checkbox" id="checkrequired" />
        <p class="form-check-label" for="checkrequired">Required</p>
      </div>
      <div>
        <p>Select Default</p>
        <input
          type="text"
          name="selectdefaul"
          @input="enterDefalutLable"
          :value="
            item.defalulValueLabel == 'Select' ? 'Select' : item.defalulValueLabel
          "
        />
        
      </div>
      <div>
        <p>Add place holder</p>
        <input type="checkbox" name="checkDefault" :checked="needDefault" @click="CheckIfWantDefault">
      </div>
      <div>
        <p>Ned Defalut</p>
        <button @click="addOptions">Add</button>
        <div>
          <p>Value</p>
           <div v-for="(item,index) in newItem.values" :key="index">
              <!-- <input type="text" @input="inputData" :index="index" :value="item"/>  -->
              <input type="text" v-model="this.newItem.values[index].value" :name="item" /> 
              <button @click="deleteItem(index)">delete{{index}}</button>
              
              <input v-if="needDefault" type="radio" name="default" @click="isDataDefault(item,index)" :checked="item.value==newItem.defalulValueLabel">
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
"use strict";
export default {
  data() {
    return {
      showHideData: false,
      prefix: false,
      newItem: this.item, 
      needDefault:true,
      test:{ 
        value:"",
        isDefault:false
      }
    };
  },

  computed: {
    arrToText() {
      return this.listArr.join("\n");
    },
  },
  props: ["id", "item"],
  // watch: {
  //   tt() {
  //     this.newItem.label = this.enterLable;
  //   },
  // },
  methods: {
    CheckIfWantDefault(){
      this.needDefault=!this.needDefault
      if(this.needDefault==false){
        this.newItem.defalulValueLabel="select"
      }
    },
    isDataDefault(t,i){
      this.newItem.defalulValueLabel=t.value
      console.log(t,i);

      // for (const valueData of this.newItem.values) {
        

      //     if(this.newItem.values[i].value==valueData.value){
      //       this.newItem.values[i].isDefault=true
      //      console.log(valueData);   
      //     }
      //     else{
      //       valueData.isDefault=false
      //     }
        
      //   // else{
      //   //   this.newItem.values[i].isDefault=false
      //   // }
      // }
    },
    deleteItem(i){
      this.newItem.values.splice(i,1)
    },
    enterLable(e) {
      this.newItem.label = e.target.value;
    },

    enterDefalutLable(e) {
      this.newItem.defalulValueLabel = e.target.value;
    },
    closeBtn() {
      this.$emit('display-element')
      let title = document.getElementById("element_setting");
      title.classList.remove("active");
      //console.log("title", title);
    },
    
    addOptions() {
       
      this.newItem.values.push(this.test)
      this.test={ 
        value:"",
        isDefault:false
      }
    },
     
  },
};
</script>
<style scoped>
.element_setting h4 {
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #fff;
  margin-bottom: 19px;
}
.Element_setting_option {
  padding: 0 30px 30px 30px;
}
.inputLabel p,
.inputLablAlign p {
  margin-bottom: 5px;
  font-size: 1.2rem;
  font-weight: 600;
}

.inputLabel input {
  width: 100%;
  height: 30px;
  border-radius: 7px;
  border: none;
}

.inputLabel,
.inputLablAlign {
  margin-bottom: 17px;
}
.inputLablAlign button {
  border: none;
  padding: 10px 17px;
  border-radius: 2px;
  background: #192a6b;
  font-weight: 600;
  color: #fff;
}
.inputLablAlign > div {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.inputLablAlign > div button {
  flex: 1;
}
.element_setting {
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  z-index: 99;
  background: #6868ac;
  color: #fff;
  transition: 0.3s;
  display: none;
  transform: translateX(-30%);
}
.element_setting.active {
  position: absolute;
  right: 0;
  top: 0;
  width: 30%;
  z-index: 99;
  background: #6868ac;
  color: #fff;
  display: block;
  transform: translateX(0);
}
</style>
