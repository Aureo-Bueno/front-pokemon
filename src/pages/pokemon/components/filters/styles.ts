/**
 * @file src/pages/pokemon/components/filters/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

/**
 * Styled component: FiltersContainer.
 */
export const FiltersContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
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
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};

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
  font-size: 13px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

/**
 * Styled component: FilterInput.
 */
export const FilterInput = styled.input`
  min-height: 48px;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.16);
    background: rgba(255, 255, 255, 0.03);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

/**
 * Styled component: FilterSelect.
 */
export const FilterSelect = styled.select`
  min-height: 48px;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 15px;
  color: #111827;
  background-color: #ffffff;
  color-scheme: light;
  cursor: pointer;
  appearance: auto;
  transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.16);
  }

  option {
    background-color: #ffffff;
    color: #111827;
  }

  option:checked,
  option:hover {
    background-color: #e2e8f0;
    color: #111827;
  }
`;

/**
 * Styled component: FilterOption.
 */
export const FilterOption = styled.option`
  padding: ${({ theme }) => theme.spacing.medium};
  color: #111827;
  background-color: #ffffff;
`;

/**
 * Styled component: ClearFiltersButton.
 */
export const ClearFiltersButton = styled.button`
  min-height: 44px;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  background: rgba(255, 255, 255, 0.02);
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  font-weight: 600;
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease;
  align-self: flex-end;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.04);
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/**
 * Styled component: ChangeSpriteButton.
 */
export const ChangeSpriteButton = styled.button`
  min-height: 44px;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  font-weight: 600;
  transition: transform 180ms ease, opacity 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.primaryHover};
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
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
