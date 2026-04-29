/**
 * @file src/components/layout/styles.ts
 * Styled-components definitions for a reusable UI component.
 */

import styled from 'styled-components';

/**
 * Styled component: LayoutContainer.
 */
export const LayoutContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
  isolation: isolate;
`;

/**
 * Styled component: Main.
 */
export const Main = styled.main`
  flex: 1;
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xlarge} 0 ${theme.spacing.xxxlarge}`};

  @media (max-width: 768px) {
    width: min(100%, calc(100% - 24px));
    padding: ${({ theme }) => `${theme.spacing.large} 0 ${theme.spacing.xxlarge}`};
  }
`;

/**
 * Styled component: Footer.
 */
export const Footer = styled.footer`
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.light};

  @media (max-width: 768px) {
    width: min(100%, calc(100% - 24px));
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: FooterText.
 */
export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
