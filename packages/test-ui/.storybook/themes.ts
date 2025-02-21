import { create, ThemeVars } from "@storybook/theming";
import { version } from "../package.json";

const shared: Partial<Omit<ThemeVars, "base">> = {
  brandTitle: `Test UI v${version}`,
  appBorderRadius: 0,
  fontBase: '"Work Sans", "Open Sans", sans-serif',
};

export const themeLight = create({
  base: "light",
  ...shared,
});

export const themeDark = create({
  base: "dark",
  ...shared,
});
