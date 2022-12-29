<template>
  <div>
    <div>Layout 1</div>

    <LinkList />

    <Nuxt />
  </div>
</template>

<script>
import LinkList from "~/components/link-list";


export default {
  components: {
    LinkList,
  },

  mounted() {
    console.log("layout-1 mounted");
  },
};
</script>
