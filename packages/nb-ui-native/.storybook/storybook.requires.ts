/* do not change this file, it is auto generated by storybook. */

import {
  start,
  prepareStories,
  getProjectAnnotations,
} from "@storybook/react-native";

import "@storybook/addon-links/register";
import "@storybook/addon-essentials/register";
import "@storybook/addon-react-native-web/register";

const normalizedStories = [
  {
    titlePrefix: "",
    directory: "./components",
    files: "**/*.stories.mdx",
    importPathMatcher:
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.mdx)$/,
    // @ts-ignore
    req: require.context(
      "../components",
      true,
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.mdx)$/
    ),
  },
  {
    titlePrefix: "",
    directory: "./components",
    files: "**/*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/,
    // @ts-ignore
    req: require.context(
      "../components",
      true,
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/
    ),
  },
];

declare global {
  var view: ReturnType<typeof start>;
  var STORIES: typeof normalizedStories;
}

const annotations = [
  require("./preview"),
  require("@storybook/react-native/dist/preview"),
];

global.STORIES = normalizedStories;

// @ts-ignore
module?.hot?.accept?.();

if (!global.view) {
  global.view = start({
    annotations,
    storyEntries: normalizedStories,
  });
} else {
  const { importMap } = prepareStories({ storyEntries: normalizedStories });

  global.view._preview.onStoriesChanged({
    importFn: async (importPath: string) => importMap[importPath],
  });

  global.view._preview.onGetProjectAnnotationsChanged({
    getProjectAnnotations: getProjectAnnotations(global.view, annotations),
  });
}

export const view = global.view;
