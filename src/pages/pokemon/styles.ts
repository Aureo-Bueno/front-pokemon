/**
 * @file src/pages/pokemon/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

/**
 * Styled component: Container.
 */
export const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.large};
  }
`;

export const PageHero = styled.section`
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.light};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const PageEyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.02);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(34px, 5vw, 56px);
  letter-spacing: -0.04em;
  line-height: 0.95;

  @media (max-width: 768px) {
    font-size: clamp(28px, 8vw, 40px);
  }
`;

/**
 * Styled component: InfoText.
 */
export const InfoText = styled.p`
  max-width: 60ch;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 16px;
  line-height: 1.7;
`;
