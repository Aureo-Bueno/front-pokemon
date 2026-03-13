/**
 * @file src/pages/pokemon/components/filters/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

/**
 * Styled component: FiltersContainer.
 */
export const FiltersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  box-shadow: ${({ theme }) => theme.shadows.light};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

/**
 * Styled component: FiltersRow.
 */
export const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: ${({ theme }) => theme.spacing.large};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: FilterGroup.
 */
export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Styled component: FilterLabel.
 */
export const FilterLabel = styled.label`
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;

/**
 * Styled component: FilterInput.
 */
export const FilterInput = styled.input`
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

/**
 * Styled component: FilterSelect.
 */
export const FilterSelect = styled.select`
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

/**
 * Styled component: FilterOption.
 */
export const FilterOption = styled.option`
  padding: ${({ theme }) => theme.spacing.medium};
`;

/**
 * Styled component: ClearFiltersButton.
 */
export const ClearFiltersButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
  align-self: flex-end;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/**
 * Styled component: ChangeSpriteButton.
 */
export const ChangeSpriteButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/**
 * Styled component: ActionsRow.
 */
export const ActionsRow = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
