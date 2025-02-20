import { create, ThemeVars } from '@storybook/theming';
import { version } from '../package.json';
//  @ts-ignore
import img from './static/monogram.svg';

const shared: Partial<Omit<ThemeVars, 'base'>> = {
  brandTitle: `Test UI v${version}`,
  brandUrl: 'http://www.uw.co.uk',
  brandImage: img,
  appBorderRadius: 0,
  fontBase: '"Work Sans", "Open Sans", sans-serif',
};

export const themeLight = create({
  base: 'light',
  ...shared,
  appBg: 'white',
  barBg: 'white',
  appContentBg: 'white',
  textColor: 'grey',
  textMutedColor: 'grey',
  colorPrimary: 'cyan',
  appBorderColor: 'grey',
});

export const themeDark = create({
  base: 'dark',
  ...shared,
  appBg: 'grey',
  barBg: 'grey',
  appContentBg: 'grey',
  textColor: 'white',
  textMutedColor: 'grey',
  colorPrimary: 'cyan',
  appBorderColor: 'grey',
});
