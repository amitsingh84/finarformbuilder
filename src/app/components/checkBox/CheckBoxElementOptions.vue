<template>
  <div id="element_setting" class="element_setting active">
    <div class="closeBtn">
      <img @click="closeBtn" src="../../../assets/imgs/close.png" alt="" />
    </div>
    <h4>Element Setting{{ id }}</h4>
    <div class="Element_setting_option">
      <div class="inputLabel">
        <p>Label</p>
        <input
          type="text"
          @input="enterLable"
          :value="item.label == 'radio' ? '' : item.label"
        />
      </div>
      <!-- <div class="inputLablAlign">
        <p>Label Align</p>
        <div>
          <button @click="checkAlign" value="left">Left</button
          ><button @click="checkAlign" value="center">Center</button
          ><button value="right" @click="checkAlign">Right</button>
        </div>
      </div> -->

      <div class="form-check form-switch requiredStyle">
          
        <input
          class="form-check-input"
          type="checkbox"
          id="checkrequired"
          @click="checkRequired"
          :checked="item.isRequired"
        />
        <p class="form-check-label" for="checkrequired">Required</p>
      </div>
       <!-- <textarea 
            @input="enterText"
            :value="arrToText"
          ></textarea> -->
          <div class="inputLablAlign">
              <p>Edit Check Box</p>
              <button @click="addFeild"> Add</button>
              {{newItem.values}}
              <div v-for="(item,index) in newItem.values" :key="item">
              <!-- <input type="text" @input="textInput" :value="item"/>  -->
              <input type="text" @input="textInput" :name="item[index]" :value="item"/> 
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
      test:'',
    };
  },
  props: ["id", "item"],
  // watch: {
  //   tt() {
  //     this.newItem.label = this.enterLable;
  //   },
  // },
  computed:{
    //   arrToText() {
    //       console.log(this.test.join("\n"));
    //   return this.test.join("\n");
    // },
  },
  methods: {
      textInput(e){
        //   this.test=e.target.value;
          console.log(e.target);
      },
      addFeild(){
          this.newItem.values.push(this.test)
      },
    enterLable(e) {
      this.newItem.label = e.target.value;
    },
//  enterText(e){
//      this.test=e.target.value.split("\n")
//      this.newItem.values.forEach((item, index)=>{
//         if(item){
//          this.newItem.values[index]=item;
//          this.newItem.values.push(this.test)
//         //  if()
          
//         //  if(!this.newItem.values[index]){
//         //    this.newItem.values.push(this.test)
//         //  }
//         //  else{
//         //     this.newItem.values[index]=this.test[index]
//         //     // this.newItem.values[index].value=this.listArr[index]
//         //  }
//         // console.log(index);
//         // console.log(this.test[index]);
//       }
//       else{
//           this.newItem.values[index]=""
//       }
//      console.log(this.newItem)
//  })
//  },
    showPrefix() {
      // this.prefix = !this.prefix;
      this.newItem.prefix = !this.newItem.prefix;
    },
    closeBtn() {
      this.$emit("display-element");
      let title = document.getElementById("element_setting");
      title.classList.remove("active");
      //console.log("title", title);
    },
    checkRequired() {
      this.newItem.isRequired = !this.newItem.isRequired;
    },
    // showElementSetting() {
    //   let newtitle = document.getElementById("element_setting");
    //   newtitle.classList.add("active");
    //   //console.log("title", newtitle);
    // },
    checkAlign(e) {
      console.log(e);
      console.log(this.newItem);
      this.newItem.align = e.target.value;
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
.closeBtn img {
  width:34px;
  background: #fff;
  padding: 10px;
  cursor: pointer;
}
.closeBtn {
  text-align: right;
}
</style>
