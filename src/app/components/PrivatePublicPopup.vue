<template>
     <div class="privateBlock">
              <label for="privateForm">privateForm</label>
              <input
                type="radio"
                name="publicPrivateForm"
                id="privateForm"
                v-model="formData"
                value="Private Form"
              />
            </div>
            <div class="publicBlock">
              <label for="publicForm">publicForm</label>
              <input
                type="radio"
                name="publicPrivateForm"
                id="publicForm"
                v-model="formData"
                value="Public Form"
              />
            </div>
</template>

<script>
export default {
     
     
  
}
</script>