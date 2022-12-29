export default {
  plugins: [
    // {
    //   src: "~/plugins/trigger-scroll.js",
    //   ssr: false
    // }
  ],

  features: {
    transitions: false,
  },

  build: {
    splitChunks: {
      layouts: true,
    },
  },
};
