/**
 * @file src/styles/theme.ts
 * Theme tokens shared across the styled-components design system.
 */

/**
 * Centralized design tokens used across all styled components.
 */
export const theme = {
  colors: {
    primary: '#dc2626',
    primaryHover: '#b91c1c',
    secondary: '#2563eb',
    tertiary: '#d97706',
    accent: '#7c3aed',
    background: '#0f172a',
    backgroundAlt: '#111827',
    surface: '#111827',
    surfaceStrong: '#0f172a',
    surfaceSoft: 'rgba(255, 255, 255, 0.03)',
    border: 'rgba(148, 163, 184, 0.16)',
    borderStrong: 'rgba(148, 163, 184, 0.24)',
    text: '#e5eefc',
    textLight: '#94a3b8',
    white: '#ffffff',
    hover: '#ef4444',
    success: '#22c55e',
    danger: '#ef4444',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px',
    xxxlarge: '80px',
  },
  borderRadius: {
    small: '10px',
    medium: '14px',
    large: '18px',
    xlarge: '24px',
    pill: '16px',
  },
  shadows: {
    light: '0 1px 2px rgba(15, 23, 42, 0.08), 0 10px 24px rgba(15, 23, 42, 0.08)',
    medium: '0 8px 24px rgba(15, 23, 42, 0.14)',
    glow: '0 0 0 1px rgba(255, 255, 255, 0.06)',
  },
  gradients: {
    page: 'linear-gradient(180deg, #0f172a 0%, #111827 100%)',
    hero: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    surface: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01))',
  },
};

/**
 * Type helper representing the theme object shape.
 */
export type Theme = typeof theme;
