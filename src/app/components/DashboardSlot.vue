<template>
  <div class="dashboardBlock">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.dashboardBlock {
  margin-left: 17rem;
  height: calc(100vh - 80px);
  overflow: hidden;
}
</style>
