// theme.ts
import { ThemeOverrides, defaultDarkTheme } from '@daohaus/ui';
import { crimson } from '@radix-ui/colors';
 
export const customPrimary = {
  step1: crimson.crimson1,
  step2: crimson.crimson2,
  step3: crimson.crimson3,
  step4: crimson.crimson4,
  step5: crimson.crimson5,
  step6: crimson.crimson6,
  step7: crimson.crimson7,
  step8: crimson.crimson8,
  step9: crimson.crimson9,
  step10: crimson.crimson10,
  step11: crimson.crimson11,
  step12: crimson.crimson12,
};
 
export const customTheme: ThemeOverrides = {
  themeName: 'customThemeName',
  rootBgColor: customPrimary.step11,
  rootFontColor: customPrimary.step5,
  primary: { ...customPrimary },
  button: {
    ...defaultDarkTheme.button,
    radius: '10px',
  },
};