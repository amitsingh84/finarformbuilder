<template>
  <div>
    <div class="inputNameStyle">
      <p v-if="item.label">
        <label >{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <p class="instructionStyle" v-if="item.Insturctions ">
       {{ item.Insturctions }}
      </p>
      <div class="inputFullNameRow inputAddressRow">
         <input
          class="input cursorPointerStyle"
          name="Stree Address"
          placeholder="Stree Address"
          id="sAddrss"
          type="text"
          readonly
          :required=item.isStreetRequired
        />
          <input
          class="input cursorPointerStyle"
          name="Stree Address line 2"
          placeholder="Stree Address Line 2"
          id="sAddrssl2"
          type="text"
          readonly
          :required=item.isStreet2Required
        />
        <div class="inputRowStyle">
           <input
          class="input cursorPointerStyle"
          name="City"
          placeholder="City"
          id="City"
          type="text"
          readonly
          :required=item.isCityRequired
        />
         
           <input
          class="input cursorPointerStyle"
          name="State"
          placeholder="State"
          id="State"
          type="text"
          readonly
          :required=item.isStateRequired
        />
        </div>
        <div class="inputRowStyle">
           <input
          class="input cursorPointerStyle"
          name="Zip code"
          placeholder="Zip code"
          id="Zip code"
          type="text"
          readonly
          :required=item.isZipCodeRequired
        />
         
           <input
          class="input cursorPointerStyle"
          name="Country"
          placeholder="Country"
          id="Country"
          type="text"
          readonly
          :required=item.isCountryRequired
        />
        </div>
      <div>
        <show-delete-setting
          @delete-data-id="deleteDataId"
          @send-data-id="showDataId"
        />
      </div>
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
      // prefix: false,
      // items: this.item,
      // showElementSettings:false,
    };
  },
  props: ["item", "elementId"],

  methods: {
    // showPrefix() {
    //   this.prefix = !this.prefix;
    //   this.items.prefix = this.prefix;
    // },
    deleteDataId() {
      this.$emit("delete-data-id", this.elementId);
    },
    showDataId() {
      this.$emit("send-data-id", this.elementId);
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
.inputNameStyle p.instructionStyle {
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 0;
}
.content_block {
  height: calc(100vh - 100px);
}
.inputFullNameRow {
  display: flex;
  gap: 18px;
  flex-direction: column;
}

 .inputFullNameRow.inputAddressRow {
    padding-top: 17px;
}
 
.inputNameStyle {
  border-radius: 7px;
  padding: 10px 30px 10px 10px;
  cursor: move;
  position: relative;
  margin: 10px 0;
  padding-bottom: 24px;
}
.inputNameStyle p {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
}
textarea#adderss {
    border: 1px solid #ced4da;
    padding-left: 10px;
}
.inputFullNameRow input {
  height: 35px;
  padding-left: 10px;
  border-radius: 7px;
  box-shadow: none;
  outline: none;
  border: 1px solid #ced4da;
}

.inputRowStyle {
    display: flex;
    gap: 17px;
}
.inputRowStyle input {
    flex: 1;
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
  background-image: url(../../../assets/imgs/trash.png);
}
.showElementSetting::before {
  background-image: url(../../../assets/imgs/gear.png);
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
.showElementSettingg:hover span,
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
