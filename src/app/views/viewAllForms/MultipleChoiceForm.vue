<template>
    <div>
        <div class="inputNameStyle inputCheckbox">
      <p  >
        <label>{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <p class="subHeading">{{item.instructions}}</p>
      <div class="inputCheckBoxStyle">

        <div class="form-check" v-for="(data,i) in item.values" :key="i">
            
          <input
            class="form-check-input"
            type="checkbox"
            :value="data"
            id="flexCheckDefault"
            @input="checkBoxData"
            :checked="data.isSelected"
           readonly 
           :name=data
          />
          <label class="form-check-label" for="flexCheckDefault">
            {{data}}
          </label>
        </div>
        <div  v-if="newItem.checkIfOtherChoice" class="col-md-6 form-check">
        <input
            class="form-check-input"
            type="checkbox"
            value="other"
            id="flexCheckDefault"
            v-model="this.newItem.isOther"
           name="other"
            
          />
          <label class="form-check-label" for="flexCheckDefault">
            Other Data
          </label>
          <div class="otherInputData" v-if="item.isOther">
              <input type="text" v-model="otherData">
            </div>
          </div>

        
      </div>
    </div> 
    </div>
</template>
<script>
export default {
    props:['item'],
    data() {
      return {
        newItem:this.item,
        otherData:''
      }
    },
    
}
</script>
<style scoped>
  .inputCheckBoxStyle > div {
    width: 50%;
}
.inputCheckBoxStyle {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* gap: 0 30px; */
}
</style>