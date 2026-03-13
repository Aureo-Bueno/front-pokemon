/**
 * @file src/pages/pokemon/components/pagination/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

/**
 * Styled component: PaginationContainer.
 */
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 768px) {
    width: 100%;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

interface ButtonProps {
  $disabled?: boolean;
}

/**
 * Styled component: PaginationButton.
 */
export const PaginationButton = styled.button<ButtonProps>`
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  font-size: 16px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.border : theme.colors.tertiary};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.textLight : theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme, $disabled }) =>
      !$disabled && theme.colors.secondary};
  }

  @media (max-width: 768px) {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  }
`;
