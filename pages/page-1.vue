<template>
  <div>Page 1</div>
</template>

<script>
export default {
  layout: "layout-1",

  async asyncData() {
    console.log('async-data 1');
    return {
      foo: 'page-1',
    };
  },

  created() {
    console.log("page-1 created", this.$nuxt.layoutName);
  },

  mounted() {
    console.log("page-1 mounted", this.$nuxt.layoutName);
  },
};
</script>
