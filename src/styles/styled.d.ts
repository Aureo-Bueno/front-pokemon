/**
 * @file src/styles/styled.d.ts
 * Type augmentation for styled-components theme typing.
 */

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string;
      tertiary: string;
      accent: string;
      background: string;
      backgroundAlt: string;
      surface: string;
      surfaceStrong: string;
      surfaceSoft: string;
      border: string;
      borderStrong: string;
      text: string;
      textLight: string;
      white: string;
      hover: string;
      success: string;
      danger: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      pill: string;
    };
    shadows: {
      light: string;
      medium: string;
      glow: string;
    };
    gradients: {
      page: string;
      hero: string;
      surface: string;
    };
  }
}
