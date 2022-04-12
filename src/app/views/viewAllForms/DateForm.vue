<template >
    <div>
         <div class="inputNameStyle">
      <p>
        <label>{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <div class="inputFullNameRow">
        <datepicker
          v-model="date"
          :enableTimePicker="false"
          :disabledWeekDays="[6, 0]"
          :format="dateFormateStyle"
        />
       <div v-if="newItem.isTimeActive">

        <Datepicker v-model="time" timePicker :is24="false" />
       </div>
      </div>
      <div>
        
      </div>
    </div>
    </div>
</template>
<script>
import { ref } from "vue"; 
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css"; 
export default {
   props:['item'],
   data() {
       return {
           newItem:this.item
       }
   },
     setup() {
        const date = ref(new Date());
        const time = ref(new Date());
        const dayMonthYear = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${year}/${month}/${day}`;
        }
        return {
             date, time,dayMonthYear
        }
    },
    components: {  Datepicker },
     computed: {
        dateFormateStyle() {
          return this.dayMonthYear
            
        }
    },
}
</script>