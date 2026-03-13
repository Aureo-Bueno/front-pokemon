/**
 * @file src/pages/pokemon/components/loading/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

/**
 * Styled component: Container.
 */
export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: Title.
 */
export const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
  color: ${({ theme }) => theme.colors.text};
`;
