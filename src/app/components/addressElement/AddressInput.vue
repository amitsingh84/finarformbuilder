<template>
  <div>
    <div class="inputNameStyle">
      <p v-if="item.label">
        <label>{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <p class="instructionStyle" v-if="item.instructions">
        {{ item.instructions }}
      </p>
      <div class="addressData row">
      <div class="selectCountry col-md-6 col-12">
        <label :for="`vehicle-makes${item.id}`">Select Country </label>
        <select
          class="ui dropdown"
          v-model="make"
          :id="`vehicle-makes${item.id}`"
          aria-label="Default select"
          disabled
        >
          <option
            v-for="option in country_options"
            :key="option"
            :value="option.id"
          >
            {{ option.text }}
          </option>
        </select>
      </div>

      <div class="selectState col-md-6 col-12">
        <label :for="`region${item.id}`">Select Region </label>
         <select class="ui dropdown"  v-model="model" :id="`region${item.id}`" disabled>
        <option 
          v-for="option in region_options[make]" 
          :value="option.id" 
          :key="option.id"
        >
          {{ option.text }}
        </option>
      </select>
      </div>
      </div>
      <show-delete-setting
          @delete-data-id="deleteDataId"
          @send-data-id="showDataId"
        />
      
    </div>
  </div>
</template>
<script>
import ShowDeleteSetting from "../ShowDeleteSetting.vue";
var region_options = {
  1: [
    { text: "Alaska", id: 1 },
    { text: "Indiana", id: 2 },
  ],
  2: [
    { text: "Bavaria", id: 3 },
    { text: "Thuringia", id: 4 },
  ],
};

var country_options = [
  { text: "United State", id: 1 },
  { text: "German", id: 2 },
  { text: "Universal", id: 3 },
];
("use strict");
export default {
  components: { ShowDeleteSetting },
  data() {
    return {
      make: null,
      model: null,
      country_options: country_options,
      region_options: region_options,
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
    alignData() {
      console.log("text-align:left", this.item.align);
    },
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
  flex-direction: column;
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
.buttonStyle {
  display: none;
}
.inputNameStyle:hover {
  background-color: #bfb6b645;
}
.inputNameStyle:hover .buttonStyle {
  display: unset;
}
select#selecttitle {
  border-radius: 7px;
  border: 1px solid #ced4da;
  cursor: pointer;
  outline: none;
}

.showElementSettingg,
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
