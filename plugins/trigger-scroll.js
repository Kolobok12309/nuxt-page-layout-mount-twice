export default () => {
  window.onNuxtReady(() => {
    window.$nuxt.$on("triggerScroll", () => {
      console.log("triggerScroll");
      alert();
    });
  });
};
