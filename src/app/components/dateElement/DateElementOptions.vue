<template>
  <div id="element_setting" class="element_setting active">
    <div class="closeBtn">
      <img @click="closeBtn" src="../../../assets/imgs/close.png" alt="" />
    </div>
    <h4>{{ newItem.name }}</h4>

    <element-properties accordionHeaderId="1">
      <template v-slot:elementHeading>QUICK SETUP</template>
      <div class="inputLabel">
        <p>Label</p>
        <input type="text" v-model="this.newItem.label" />
      </div>
      <div class="inputLabel">
        <p>Sub Heading</p>
        <input
          type="text"
          name="nameDesc"
          id="nameDesc"
          v-model="this.newItem.subHeading"
        />
      </div>
      <div class="form-check form-switch requiredStyle">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkrequired"
          v-model="this.newItem.isRequired"
        />
        <p class="form-check-label" for="checkrequired">Required</p>
      </div>
    </element-properties>

    <element-properties accordionHeaderId="2">
      <template v-slot:elementHeading>OPTIONS</template>
      <div class="validationSectionStyle">
        <div class="inputLabel">
          <p>Date Formate:</p>
          <select
            aria-label="Default select example"
            class=" "
            :id="`dropdown${id}`"
            v-model="this.newItem.dateFormat"
          >
            <option value="mm/dd/yy">mm/dd/yy</option>
            <option value="dd/mm/yy">dd/mm/yy</option>
            <option value="mm/yy">mm/yy</option>
          </select>
        </div>
        <div class="inputLabel">
          <p>Default Date:</p>
          <select v-model="this.newItem.defaultDate">
             
            <option value="current">current</option>
            <option value="custome" >custome</option>
          </select>
         
        </div>
          <input v-if="newItem.defaultDate=='custome'" type="date">
        
      </div>
    </element-properties>
    <element-properties accordionHeaderId="3">
      <template v-slot:elementHeading>Time</template>
      <div class="inputLabel">
        <p>Time Feild</p>
        <input type="checkbox" v-model="this.newItem.isTimeActive" />
      </div>
      <div v-if="newItem.isTimeActive" class="inputLabel">
        <p>Time Formate</p>
        <select v-model="this.newItem.timeFormat">
          <option value="24 Hour">24 Hour</option>
          <option value="12 Hour">12 Hour</option>
        </select>
      </div>
      <div v-if="newItem.isTimeActive" class="inputLabel">
        <p>Default Time</p>
        <select>
          <option value="current">current</option>
          <option value="custome" >custome</option>
        </select>
      </div>
    </element-properties>
    <element-properties accordionHeaderId="4">
      <template v-slot:elementHeading>VALIDATION</template>

      <p>Days of the week</p>
      <div class="daysOfWeekStyle">
        <div
          class="form-check"
          v-for="(weekDaysName, index) in weekDays"
          :key="index"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="index"
            :id="`weekDaysName${index}`"
            checked
            @input="checkDays"
           
          />
          <label class="form-check-label" :for="`weekDaysName${index}`">
            {{ weekDaysName }}
          </label>
        </div>
      </div>

      <p>Start & End Date</p>
      <div class="inputLabel">
        <label>Start Date</label>
        <input type="date" v-model="this.newItem.minDate" />
      </div>
      <div class="inputLabel">
        <label>End Date</label>
        <input type="date" v-model="this.newItem.maxDate" />
      </div>
    </element-properties>
     <element-properties accordionHeaderId="5">
      <template v-slot:elementHeading>OPTIONS</template>
      <div class="optionsLabelStyle">
        <p>Hide field:</p>
        <input type="checkbox" v-model="this.newItem.hideField" />
      </div>
      <div class="optionsLabelStyle">
        <p>Readonly field:</p>
        <input type="checkbox" v-model="this.newItem.readonlyField" />
      </div>
    </element-properties>
  </div>
</template>
<script>
import ElementProperties from "../../slots/ElementProperties.vue";
("use strict");
export default {
  components: { ElementProperties },
  data() {
    return {
      showHideData: false,
      prefix: false,
      newItem: this.item,
      label: "",
      isRequired: false,
      weekDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dateFormat: "mm/dd/yy",
      defaultDate: "current",
      startWeek: "monday",
      timeFormat: "",
      customeDate:false,
      uncheckDays:[0,1]
    };
  },
  props: ["id", "item"],
  mounted() {
    this.newItem.dateFormat = this.dateFormat;
    this.newItem.defaultDate = this.defaultDate;
    this.newItem.startWeek = this.startWeek;
  },
//   watch: {
// defaultDate(){
//   if(this.newItem.defaultDate=='custome'){
//     alert('hi')
//     this.customeDate=false
//   }
// }
//   },

  methods: {
    
    
    enterLable(e) {
      this.newItem.label = e.target.value;
    },
    checkDays(e) {
      // this.newItem.uncheckDays.push(e.target.value)
      console.log(e.target.value);
    },
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
.validationSectionStyle .inputLabel input {
  flex: 0.3;
}
.validationSectionStyle .inputLabel p {
  flex: 1;
}
.validationSectionStyle .inputLabel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.daysOfWeekStyle > div {
  flex: 1;
}
.daysOfWeekStyle {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 17px;
}
.element_setting h4 {
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #fff;
  margin-bottom: 19px;
}
p {
  margin-bottom: 5px;
}
.inputLabel label {
  font-size: 0.8rem;
  opacity: 0.7;
}
.inputLabel input {
  width: 100%;
}
.daysOfWeekStyle input {
  border: 1px solid #fff !important;
}
</style>
