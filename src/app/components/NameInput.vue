<template>
  <div>
    <div class="inputNameStyle">
      <p><label for="">{{item.label}}</label></p>
      <div class="inputFullNameRow">
        <select name="selectprfix" id="selecttitle" v-if="item.prefix">
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
        </select>
        <input
          class="input cursorPointerStyle"
          name="first name"
          placeholder="First Name"
          id="fname"
          type="text"
          readonly
        />
        <input
          type="text"
          name="last name"
          id="lname"
          placeholder="Last Name"
          readonly
          class="cursorPointerStyle"
        />
      </div>
      <div class="showElementSetting" @click="showDataId">click</div>
      <div class="showElementSettingg" @click="deleteDataId">delete{{elementId}}</div>
    </div>

    <!-- <div class="element_setting" v-if="showElementSettings">
      <h4>Element Setting</h4>
      <div class="Element_setting_option">
        <div class="inputLabel">
          <p>Label</p>
          <input type="text" />
        </div>
        <div class="inputLablAlign">
          <p>Label Align</p>
          <div>

          <button>Left</button><button>Center</button><button>Right</button>
          </div>
        </div>

        <div class="form-check form-switch requiredStyle">
          <input class="form-check-input" type="checkbox" id="checkrequired" />
          <p class="form-check-label" for="checkrequired"
            >Required</p>
        </div>
        <div class="form-check form-switch prefixStyle">
          <input
            class="form-check-input"
            type="checkbox"
            id="prefixStyles"
            @click="showPrefix"
          />
          <label class="form-check-label" for="prefixStyles"
            >Show Prefix</label
          >
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
"use strict";
export default {
  data() {
    return{
      // prefix: false,
      // items: this.item,
      // showElementSettings:false,
    };
  },
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
      console.log(this.elementId);
      setTimeout(() => {
        
        let newtitle=document.getElementById('element_setting')
        console.log(newtitle);
        newtitle.classList.add("active");
      }, 1);
    },
    
    // showProperties(){
    //   // alert(this.id)
    //   this.$emit('show-element-setting',this.id)
    //   // this.showElementSettings=!this.showElementSettings
    // }
  },
  
  mounted() {
    console.log(this.item);
    
  },
};
</script>
<style scoped>
.content_block {
  height: calc(100vh - 100px);
}
.inputFullNameRow {
  display: flex;
  gap: 18px;
}

.inputFullNameRow > select {
  flex: 0.1;
}

.inputFullNameRow input {
  flex: 1;
}
.inputNameStyle {
  border-radius: 7px;
  border: 1px solid;
  padding: 10px 30px;
  cursor: move;
  position: relative;
  margin: 10px 0;
  padding-bottom: 24px;
}
.inputNameStyle p {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 7px;
}
.inputFullNameRow input {
  height: 35px;
  padding-left: 10px;
  border-radius: 7px;
  border: 1px solid #000;
  box-shadow: none;
  outline: none;
}
.prefixStyle input,
.requiredStyle input {
  height: 20px;
  cursor: pointer;
}
.prefixStyle input:checked,
.requiredStyle input:checked {
  background-color: #192a6b;
}
.inputNameStyle .cursorPointerStyle {
  cursor: move;
}
select#selecttitle {
  border-radius: 7px;
  border: 1px solid #000;
  cursor: pointer;
  outline: none;
}
/* .element_setting {
    position: absolute;
    right: 0;
    top: 0;
    width: 30%;
    z-index: 99;
    background: #6868ac;
    color: #fff;
} */
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
/* .element_setting h4 {
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #fff;
    margin-bottom: 19px;
}
.Element_setting_option {
    padding: 0 30px 30px 30px;
}
.inputLabel p,.inputLablAlign p {
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

.inputLabel,.inputLablAlign {
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
} */

.inputLablAlign > div button {
  flex: 1;
}
</style>
