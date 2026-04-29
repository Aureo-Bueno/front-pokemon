/**
 * @file src/styles/global.ts
 * Global CSS rules injected through styled-components.
 */

import { createGlobalStyle } from 'styled-components';

/**
 * Global baseline styles applied to the entire application.
 */
export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    font-family: 'Segoe UI', 'Trebuchet MS', 'Gill Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100dvh;
  }

  body {
    min-height: 100dvh;
    background:
      ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
  }

  input, textarea, select {
    font-family: inherit;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 3px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
