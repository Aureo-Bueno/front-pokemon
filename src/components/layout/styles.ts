/**
 * @file src/components/layout/styles.ts
 * Styled-components definitions for a reusable UI component.
 */

import styled from 'styled-components';

/**
 * Styled component: LayoutContainer.
 */
export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

/**
 * Styled component: Main.
 */
export const Main = styled.main`
  flex: 1;
`;

/**
 * Styled component: Footer.
 */
export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xlarge};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

/**
 * Styled component: FooterText.
 */
export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
