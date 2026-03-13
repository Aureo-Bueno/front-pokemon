/**
 * @file src/styles/theme.ts
 * Theme tokens shared across the styled-components design system.
 */

/**
 * Centralized design tokens used across all styled components.
 */
export const theme = {
  colors: {
    primary: '#333',
    secondary: '#ff6b6b',
    tertiary: '#007bff',
    background: '#f0f0f0',
    border: '#ddd',
    text: '#333',
    textLight: '#666',
    white: '#ffffff',
    hover: '#ff5252',
  },
  spacing: {
    small: '5px',
    medium: '10px',
    large: '15px',
    xlarge: '20px',
    xxlarge: '30px',
    xxxlarge: '60px',
  },
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '15px',
  },
  shadows: {
    light: '0 4px 8px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.2)',
  },
};

/**
 * Type helper representing the theme object shape.
 */
export type Theme = typeof theme;
