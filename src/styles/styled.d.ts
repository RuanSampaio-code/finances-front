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
      background: string;
    };
    fonts: {
      regular: string;
    };
  }
}
