<template>
  <div>Page 2</div>
</template>

<script>
export default {
  layout: "layout-2",

  async asyncData() {
    console.log('async-data 2');
    return {
      foo: 'page-2',
    };
  },

  created() {
    console.log("page-2 created", this.$nuxt.layoutName);
  },

  mounted() {
    console.log("page-2 mounted", this.$nuxt.layoutName);
  },
};
</script>
