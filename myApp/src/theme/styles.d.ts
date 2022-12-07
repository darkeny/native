import "styled-components";
import light from "./light";
import dark from "./dark";

declare module "styled-components" {
  type ThemeType = typeof light;
  type ThemeType = typeof dark;

  export interface DefaultTheme extends ThemeType {  }
}