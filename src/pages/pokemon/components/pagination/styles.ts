import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xlarge};
`;

interface ButtonProps {
  $disabled?: boolean;
}

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
`;
