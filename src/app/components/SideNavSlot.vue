<template>
  <div class="sideNavSlot">
      <slot>
      </slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.sideNavSlot {
  background-color: #192a6b;
  height: calc(100vh - 80px);
  left: 0;
  top: 80px;
  width: 17rem;
  z-index: 9999;
  position: absolute;
}
</style>