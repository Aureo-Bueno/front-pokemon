/**
 * @file src/pages/pokemon/components/error-message/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

/**
 * Styled component: Container.
 */
export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  border: 1px solid rgba(239, 68, 68, 0.35);
  background: rgba(127, 29, 29, 0.18);

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: Title.
 */
export const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.danger};
  font-size: clamp(22px, 4vw, 30px);
`;

/**
 * Styled component: InfoText.
 */
export const InfoText = styled.p`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
`;
