const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/${{ repoName }}/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/index.scss";
        `,
      },
    },
  },
});
