import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    neumorphism: {
      flat: string;
      pressed: string;
    };
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    neumorphism?: {
      flat: string;
      pressed: string;
    };
  }
}

export const customTheme = createMuiTheme({
  neumorphism: {
    flat:
      '-7px -7px 20px 0px #fff1, -4px -4px 5px 0px #fff1, 7px 7px 20px 0px #0009, 4px 4px 5px 0px #0009, inset 0px 0px 0px 0px #fff1, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #0009, inset 0px 0px 0px 0px #0009',
    pressed:
      '0px 0px 0px 0px #fff1, 0px 0px 0px 0px #fff1, 0px 0px 0px 0px #0009, 0px 0px 0px 0px #0009, inset -7px -7px 20px 0px #fff1, inset -4px -4px 5px 0px #fff1, inset 7px 7px 20px 0px #0009, inset 4px 4px 5px 0px #0009',
  },
});
