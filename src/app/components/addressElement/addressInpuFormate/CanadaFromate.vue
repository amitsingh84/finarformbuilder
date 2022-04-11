<template>
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
</template>
<script>

import ShowDeleteSetting from "../../ShowDeleteSetting.vue"
export default {
    props:['item'],
    components:{ShowDeleteSetting},
    methods: {
         deleteDataId() {
      this.$emit("delete-data-id", this.elementId);
    },
    showDataId() {
       
      this.$emit("send-data-id", this.elementId);
      //console.log(this.elementId);
      setTimeout(() => {
        let newtitle = document.getElementById("element_setting");
        console.log(newtitle);
        newtitle.classList.add("active");
      }, 1);
    },
    },
}
</script>
<style>

</style>