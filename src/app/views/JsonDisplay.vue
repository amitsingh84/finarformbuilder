<template>
  <div>
    <h3>{{ title }}</h3>
    <pre class="bg-gray-300 rounded-lg p-5">{{ value }}</pre>
    <!-- <preview :newValue={value} /> -->
  </div>
</template>
<script>
// import Preview from './Preview.vue'
export default {
  // components: { Preview },
  props: {
    title: {
      default: "",
      type: String,
    },
    value: {
      required: true,
    },
  },
  data() {
    return {
      newValue: [],
    };
  },

  methods: {},
  mounted() {
    console.log(this.value);
  },
};
</script>
<style scoped>
pre {
  font-size: 10px;
  text-align: start;
}
</style>
