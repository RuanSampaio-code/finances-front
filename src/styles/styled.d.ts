import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      vegasGold: string;
      buff: string;
      earthYellow: string;
      sandyBrown: string;
      redOrangeColorWheel: string;
      xiketic: string;
      queenBlue: string;
      carolineBlue: string;

      background: string;
      colorPalette: {
        primary: string;
      };
    };
    fonts: {
      regular: string;
    };
  }
}
