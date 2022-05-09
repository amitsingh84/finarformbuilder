<template>
    <div>
         <h4 class="text-center mt-4">
        Please, Verify Mobile Number & Adderss First.
      </h4>
      <div class="verifyMobileBlock">
        <div class="VerifyMobileNumber">
          <div class="verifyMobileImg"></div>
          <div class="verifyMobileText">
            <modal-data titleText="Provide Your Mobile Phone Number" id="1" phoneNumber="12345678">
              <template v-slot:modalHeading> </template>
            </modal-data>
            <p class="subTitleText">Mobile Number Not Verified</p>
          </div>
        </div>
        <div class="VerifyAddress">
          <div class="verifyAddressImg"></div>
          <div class="verifyAddressText"></div>
        </div>
      </div>
    </div>
</template>

<script>
import ModalData from "../slots/ModalData.vue";
export default {
    components: {   ModalData,  },
}
</script>