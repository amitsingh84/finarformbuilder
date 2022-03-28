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
            item.defalulValueLabel == 'Select' ? '' : item.defalulValueLabel
          "
        />
      </div>
      <div>
        <p>Value</p>
        <button @click="addOptions">Add</button>
        <div>
          <textarea
            name="textarea"
            id=""
            cols="30"
            rows="4"
            :value="arrToText"
            @input="textToArr"
          ></textarea>
          <p v-for="(item, index) in listArr" :key="index">{{ item }}</p>
          <!-- <p>Value 1</p>
          <p>
            <label >Label</label>
            <input type="text">
          </p>
          <p>
            <label >Value</label>
            <input type="text">
          </p> -->
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
      listArr: ["value1"], 
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
    enterLable(e) {
      this.newItem.label = e.target.value;
    },

    enterDefalutLable(e) {
      this.newItem.defalulValueLabel = e.target.value;
    },
    closeBtn() {
      let title = document.getElementById("element_setting");
      title.classList.remove("active");
      console.log("title", title);
    },
    // showElementSetting() {
    //   let newtitle = document.getElementById("element_setting");
    //   newtitle.classList.add("active");
    //   console.log("title", newtitle);
    // },
    addOptions() {
      console.log("add");
      console.log(this.newItem);
    },
    textToArr(e) {
      this.listArr = e.target.value.split("\n");
      console.log(this.listArr);
      // this.newItem.values[0].label.push(1)
      for (let index = 0; index < this.listArr.length; index++) {
        // if(this.listArr.hasOwnProperty(index)){
        //   console.log(1);
        // }
        this.newItem.values[index].label = "";
        
        // this.newItem.values[index].value = "";
        // this.newItem.values[index].selected = true;
        // console.log(this.newItem.values[index]);
        // console.log(this.listArr[index]);

        // this.newItem.values[index].label.push(this.listArr[index])

        console.log("tt",this.listArr.length);
        // console.log(this.listArr.values.length);
      }
      // this.listArr.map((item,index)=>{
      //   // this.newItem.values[index].selected=item
      //   this.newItem.values[index].label=item
      //   console.log(this.newItem.values[index]);
      //   console.log(this.newItem);
      //   console.log(item,index);
      // }
      // )
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
