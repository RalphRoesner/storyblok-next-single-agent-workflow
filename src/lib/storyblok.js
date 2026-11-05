import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "@/app/components/page/Page";
import Teaser from "@/app/components/teaser/Teaser";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.ACCESS_PREVIEW_TOKEN,
  use: [apiPlugin],
   components: {
    page: Page,
    teaser: Teaser
  },
  apiOptions: {
    region: "eu",
  },
});