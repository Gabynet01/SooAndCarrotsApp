/* do not change this file, it is auto generated by storybook. */

import { start } from "@storybook/react-native";

import "@storybook/addon-links/register";
import "@storybook/addon-essentials/register";

const normalizedStories = [
  {
    titlePrefix: "",
    directory: ".",
    files: "**/*.stories.mdx",
    importPathMatcher:
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.mdx)$/,
    // @ts-ignore
    req: require.context(
      "..",
      true,
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.mdx)$/
    ),
  },
  {
    titlePrefix: "",
    directory: ".",
    files: "**/*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|ts|tsx))$/,
    // @ts-ignore
    req: require.context(
      "..",
      true,
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|ts|tsx))$/
    ),
  },
];

// @ts-ignore
global.STORIES = normalizedStories;

export const view = start({
  annotations: [require("@storybook/react-native/dist/preview")],
  storyEntries: normalizedStories,
});
