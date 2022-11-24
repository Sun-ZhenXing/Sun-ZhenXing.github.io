import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "鸭梨",
      description: "鸭梨的博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
