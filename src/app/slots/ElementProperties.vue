<template>
  <div class="elementPropsSlot">
      <div class="elementPropsBlock">
    <div class="accordion" :id="`accordionheader_${accordionHeaderId}`">
      <div class="accordion-item">
        <h2 class="accordion-header" :id="`accordionheader_${accordionHeaderId}`">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse_${accordionHeaderId}`"
            aria-expanded="true"
            :aria-controls="`collapse_${accordionHeaderId}`"
          >
            <slot name="elementHeading"></slot>
          </button>
        </h2>
        <div
          :id="`collapse_${accordionHeaderId}`"
          class="accordion-collapse collapse show"
          :aria-labelledby="`accordionheader_${accordionHeaderId}`"
          :data-bs-parent="`#collapse_${accordionHeaderId}`"
        >
          <div class="accordion-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    props:["accordionHeaderId"]
};
</script>
<style scoped>
.elementPropsBlock button.accordion-button {
    background: transparent;
    box-shadow: none;
    color: #fff;
    font-weight: 700;
}
.elementPropsBlock .accordion-body {
    background: transparent;
    padding-top: 0;
}
.elementPropsBlock .accordion-item{
    background-color: #6868ac;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #fff3;
}

.accordion-button::after{
    filter: brightness(30);
}

</style>