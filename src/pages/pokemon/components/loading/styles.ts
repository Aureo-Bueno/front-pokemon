/**
 * @file src/pages/pokemon/components/loading/styles.ts
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
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.light};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: Title.
 */
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(22px, 4vw, 30px);
`;
