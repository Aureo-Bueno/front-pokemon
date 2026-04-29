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
  padding-bottom: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 768px) {
    width: 100%;
    gap: ${({ theme }) => theme.spacing.medium};
    padding-bottom: 0;
  }
`;

interface ButtonProps {
  $disabled?: boolean;
}

/**
 * Styled component: PaginationButton.
 */
export const PaginationButton = styled.button<ButtonProps>`
  min-height: 44px;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  font-size: 16px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  background: ${({ theme, $disabled }) =>
    $disabled ? "rgba(255, 255, 255, 0.02)" : theme.colors.primary};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.textLight : theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease;

  &:hover {
    transform: ${({ $disabled }) => ($disabled ? "none" : "translateY(-1px)")};
    border-color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.border : theme.colors.borderStrong};
    background: ${({ theme, $disabled }) =>
      $disabled ? "rgba(255, 255, 255, 0.02)" : theme.colors.primaryHover};
  }

  @media (max-width: 768px) {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  }
`;
