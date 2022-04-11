<template>
    <div>
         <div class="nameForm">
          
          <p class="nameLabel" :style="`text-align:${item.align}`">
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
          </p>
          <div class="inputFullNameRow">
             
            <input
              class="input cursorPointerStyle"
              name="Enter Number"
              placeholder="Enter Number"
              id="number"
              type="tel"
              
              :required=item.isRequired
            />
             
          </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['item']
}
</script>