<template>
  <div>
    <div class="inputNameStyle">
      <p v-if="item.label">
        <label>{{ item.label }}<sup v-if="item.isRequired">*</sup></label>
      </p>
      <p class="instructionStyle" v-if="item.subHeading">
        {{ item.subHeading }}
      </p>
      <div class="addressFormData">
        <div class="addressData row">
          <div class="selectCountry col-md-6 col-12">
            <label :for="`vehicle-makes${item.id}`">Select Country </label>
            <select
              class="ui dropdown"
              v-model="make"
              :id="`vehicle-makes${item.id}`"
              aria-label="Default select"
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

          <div class="selectState col-md-6 col-12" v-if="make != 3">
            <label :for="`region${item.id}`">Select Region </label>
            <select
              class="ui dropdown"
              v-model="model"
              :id="`region${item.id}`"
            >
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
        <div class="inputAddressRow row" v-if="make == 3">
          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="Stree Address"
              placeholder="Stree Address"
              id="sAddrss"
              type="text"
              :required="item.isStreetRequired"
            />
          </div>
          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="Stree Address line 2"
              placeholder="Stree Address Line 2"
              id="sAddrssl2"
              type="text"
              :required="item.isStreet2Required"
            />
          </div>

          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="Country"
              placeholder="Country"
              id="Country"
              type="text"
              :required="item.isCountryRequired"
            />
          </div>

          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="State"
              placeholder="State / Province / Region"
              id="State"
              type="text"
              :required="item.isStateRequired"
            />
          </div>

          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="City"
              placeholder="City/Town"
              id="City"
              type="text"
              :required="item.isCityRequired"
            />
          </div>
          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="Zip code"
              placeholder="Zip / Postal code"
              id="Zip code"
              type="text"
              :required="item.isZipCodeRequired"
            />
          </div>

          <div></div>
        </div>
        <div class="inputAddressRow row" v-if="make == 2">
          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="Stree Address"
              placeholder="Stree Address"
              id="sAddrss"
              type="text"
              :required="item.isStreetRequired"
            />
          </div>
          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="Stree Address line 2"
              placeholder="Stree Address Line 2"
              id="sAddrssl2"
              type="text"
              :required="item.isStreet2Required"
            />
          </div>

          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="Country"
              placeholder="Country"
              id="Country"
              type="text"
              :required="item.isCountryRequired"
            />
          </div>
          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="Province"
              placeholder="Province"
              id="Province"
              type="text"
              :required="item.isProvinceRequired"
            />
          </div>

          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="City"
              placeholder="City"
              id="City"
              type="text"
              :required="item.isCityRequired"
            />
          </div>
          <div class="col-md-6 col-12 mt-3">
            <input
              class="input cursorPointerStyle"
              name="Postal code"
              placeholder="Postal code"
              id="Postal code"
              type="text"
              :required="item.isPostalCodeRequired"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div class="inputAddressRow row" v-if="make == 1">
        <div class="col-md-6 col-12 mt-3">
          <input
            class="input cursorPointerStyle"
            name="Stree Address"
            placeholder="Stree Address"
            id="sAddrss"
            type="text"
            :required="item.isStreetRequired"
          />
        </div>
        <div class="col-md-6 col-12 mt-3">
          <input
            class="input cursorPointerStyle"
            name="Stree Address line 2"
            placeholder="Stree Address Line 2"
            id="sAddrssl2"
            type="text"
            :required="item.isStreet2Required"
          />
        </div>

        <div class="col-md-6 col-12 mt-3">
          <input
            class="input cursorPointerStyle"
            name="Country"
            placeholder="Country"
            id="Country"
            type="text"
            :required="item.isCountryRequired"
          />
        </div>
        <div class="col-md-6 col-12 mt-3">
          <input
            class="input cursorPointerStyle"
            name="City"
            placeholder="City"
            id="City"
            type="text"
            :required="item.isCityRequired"
          />
        </div>

        <div class="col-md-6 col-12 mt-3">
          <input
            class="input cursorPointerStyle"
            name="Zip code"
            placeholder="Zip code"
            id="Zip code"
            type="text"
            :required="item.isZipCodeRequired"
          />
        </div>
        <div class="col-md-6 col-12 mt-3">
          <input
            class="input cursorPointerStyle"
            name="State"
            placeholder="State"
            id="State"
            type="text"
            :required="item.isStateRequired"
          />
        </div>

        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
let region_options = {
  1: [
    { text: "Alaska", id: 1 },
    { text: "Indiana", id: 2 },
  ],
  2: [
    { text: "Bavaria", id: 3 },
    { text: "Thuringia", id: 4 },
  ],
};

let country_options = [
  { text: "United State", id: 1 },
  { text: "German", id: 2 },
  { text: "Universal", id: 3 },
];
export default {
  props: ["item"],
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
};
</script>
