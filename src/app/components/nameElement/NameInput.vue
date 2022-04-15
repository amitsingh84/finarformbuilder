<template>
  <div>
    <div class="inputNameStyle">
      <p>
        <label >{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <p class="instructionStyle">{{item.subHeading}}</p>
      <div class="inputFullNameRow">
        <select name="selectprfix" id="selecttitle" v-if="item.prefix">
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
        </select>
        <input
          class="input cursorPointerStyle"
          name="first name"
          :placeholder="item.fplaceholder==null?'First Name':item.fplaceholder"
          id="fname"
          type="text"
          readonly
          :required=item.isRequired
        />
        <input
          type="text"
          name="last name"
          id="lname"
          :placeholder="item.lplaceholder==null?'Last Name':item.lplaceholder"
          readonly
          class="cursorPointerStyle"
          :required=item.isRequired
        />
      </div>
      <div>
        <show-delete-setting
          @delete-data-id="deleteDataId"
          @show-data-id="showDataId"
        />
      </div>
    </div>

  
  </div>
</template>
<script>
import ShowDeleteSetting from "../ShowDeleteSetting.vue";
("use strict");
export default {
  components: { ShowDeleteSetting },
  data() {
    return {
      
    };
  },
  props: ["item", "elementId"],

  methods: {
     
    deleteDataId() {
      this.$emit("delete-data-id", this.elementId);
    },
    showDataId() {
      this.$emit("show-data-id", this.elementId);
      //console.log(this.elementId);
      setTimeout(() => {
        let newtitle = document.getElementById("element_setting");
        //console.log(newtitle);
        newtitle.classList.add("active");
      }, 1);
    },
alignData(){
  console.log('text-align:left', this.item.align);
}
    // showProperties(){
    //   // alert(this.id)
    //   this.$emit('show-element-setting',this.id)
    //   // this.showElementSettings=!this.showElementSettings
    // }
  },

  mounted() {
    //console.log(this.item);
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
  /* border: 1px solid; */
   padding: 14px 30px;
  cursor: move;
  position: relative;
  margin: 4px 0;
  /* padding-bottom: 24px; */
}
/* .inputNameStyle p {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 7px;
} */
.inputFullNameRow input {
  height: 35px;
  padding-left: 10px;
  border-radius: 7px;
  border: 1px solid #ced4da;
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
.buttonStyle{
  display: none;
}
.inputNameStyle:hover{
  background-color: #bfb6b645;
}
.inputNameStyle:hover .buttonStyle{
  display: unset;
}
select#selecttitle {
  border-radius: 7px;
  border: 1px solid #ced4da;
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
} */
.deleteElementSetting,
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
  background-image: url(../../../assets/imgs/trash.png);
}
.showElementSetting::before {
  background-image: url(../../../assets/imgs/gear.png);
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
.deleteElementSetting:hover span,
.showElementSetting:hover span {
  /* display: inline-block; */
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
