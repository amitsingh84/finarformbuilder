<template>
    <div>
         <div class="inputNameStyle">
      <p v-if="item.label">
        <label >{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <p class="instructionStyle" v-if="item.instructions ">
       {{ item.instructions }}
      </p>
      <div class="inputFullNameRow inputAddressRow" v-if="item.addressOptions=='Universal'">
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
          name="Country"
          placeholder="Country"
          id="Country"
          type="text"
          readonly
          :required=item.isCountryRequired
        />
          
          <input
          class="input cursorPointerStyle"
          name="State"
          placeholder="State / Province / Region"
          id="State"
          type="text"
          readonly
          :required=item.isStateRequired
        />
          
        </div>
        <div class="inputRowStyle">
           <input
          class="input cursorPointerStyle"
          name="City"
          placeholder="City/Town"
          id="City"
          type="text"
          readonly
          :required=item.isCityRequired
        />
           <input
          class="input cursorPointerStyle"
          name="Zip code"
          placeholder="Zip / Postal code"
          id="Zip code"
          type="text"
          readonly
          :required=item.isZipCodeRequired
        />
           
         
        </div>
     
    </div>
    <div class="inputFullNameRow inputAddressRow" v-if="item.addressOptions=='German'">
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
          name="Country"
          placeholder="Country"
          id="Country"
          type="text"
          readonly
          :required=item.isCountryRequired
        />
           <input
          class="input cursorPointerStyle"
          name="Province"
          placeholder="Province"
          id="Province"
          type="text"
          readonly
          :required=item.isProvinceRequired
        />
         
           
        </div>
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
          name="Postal code"
          placeholder="Postal code"
          id="Postal code"
          type="text"
          readonly
          :required=item.isPostalCodeRequired
        />
         
          
        </div>
     
    </div>
      <div class="inputFullNameRow inputAddressRow" v-if="item.addressOptions=='United State'">
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
          name="Country"
          placeholder="Country"
          id="Country"
          type="text"
          readonly
          :required=item.isCountryRequired
        />
           <input
          class="input cursorPointerStyle"
          name="City"
          placeholder="City"
          id="City"
          type="text"
          readonly
          :required=item.isCityRequired
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
          name="State"
          placeholder="State"
          id="State"
          type="text"
          readonly
          :required=item.isStateRequired
        />
         
        </div>
     
    </div>

    </div>
    </div>
</template>
<script>
export default {
    props:['item']
}
</script>