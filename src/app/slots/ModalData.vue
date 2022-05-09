<template>
     <slot name="modalHeading">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#data${id}`">
  <p class="titleText">{{titleText}}</p>
</button>
     </slot>
<!-- Modal -->
 
<div v-if="id==1" class="modal fade" :id="`data${id}`" tabindex="-1" :aria-labelledby="`${id}Label`" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-body">
     <div class="phoneNumberVerifyPopup">
         <p class="text-center phoneTitle">Phone Number Verification</p>
     </div>
      </div>
      
    </div>
  </div>
</div>

<div v-if="id==2" class="modal fade" :id="`data${id}`" tabindex="-1" :aria-labelledby="`${id}Label`" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       2
      </div>
       
    </div>
  </div>
</div>
</template>
<script>
export default {
    props:['titleText','id','phoneNumber']
}
</script>