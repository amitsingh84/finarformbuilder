<template>
    <div>
          <div class="nameForm">
          <div class="nameLabel" :style="`text-align:${item.align}`">
            <h1 for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></h1>
          <p>{{item.description}}</p>
          </div>
          
        </div>
    </div>
</template>
<script>
export default {
    props:['item']
}
</script>