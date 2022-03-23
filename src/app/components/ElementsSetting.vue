<template>
  <div>
    <div id="element_setting" v-if="id" class="element_setting active">
      <button @click="closeBtn">close</button>
      <h4>Element Setting{{ id }}</h4>
      <div class="Element_setting_option">
        <div class="inputLabel">
          <p>Label</p>
          <input type="text" v-model="enterLable" />
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
        <div class="form-check form-switch prefixStyle">
          <input
            class="form-check-input"
            type="checkbox"
            id="prefixStyles"
            @click="showPrefix"
            :checked="item.prefix"
          />
          
          <label class="form-check-label" for="prefixStyles">Show Prefix</label>
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
      enterLable: "",
      newItem:this.item
    };
  },
  props: ["id", "item"],
  watch: {
    enterLable() {
      
          this.newItem.label=this.enterLable
           
        
    },
  },
  methods: {
    showPrefix() {
          this.prefix = !this.prefix;
          this.newItem.prefix = this.prefix;
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
