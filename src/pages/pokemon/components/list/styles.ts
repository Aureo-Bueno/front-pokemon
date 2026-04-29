/**
 * @file src/pages/pokemon/components/list/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

/**
 * Styled component: PokemonGrid.
 */
export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  }
`;

/**
 * Styled component: PokemonCard.
 */
export const PokemonCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: PokemonImage.
 */
export const PokemonImage = styled.img`
  width: 112px;
  height: 112px;
  margin: 0 auto;
  filter: drop-shadow(0 10px 18px rgba(15, 23, 42, 0.18));

  @media (max-width: 768px) {
    width: 92px;
    height: 92px;
  }
`;

/**
 * Styled component: PokemonName.
 */
export const PokemonName = styled.h3`
  text-transform: capitalize;
  margin: ${({ theme }) => `${theme.spacing.large} 0 ${theme.spacing.small}`};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

/**
 * Styled component: PokemonId.
 */
export const PokemonId = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 13px;
`;

/**
 * Styled component: NoResultsContainer.
 */
export const NoResultsContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.xxlarge} ${theme.spacing.large}`};
  color: ${({ theme }) => theme.colors.textLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  background: ${({ theme }) => theme.colors.surface};
`;

/**
 * Styled component: NoResultsText.
 */
export const NoResultsText = styled.p`
  font-size: 18px;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

/**
 * Styled component: ClearFiltersButton.
 */
export const ClearFiltersButton = styled.button`
  min-height: 44px;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  font-weight: 600;
  transition: transform 180ms ease, background-color 180ms ease;
  align-self: flex-end;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

/**
 * Styled component: PokemonMeta.
 */
export const PokemonMeta = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: grid;
  gap: 4px;
`;

export const PokemonMetaLine = styled.div`
  overflow-wrap: anywhere;
  font-size: 12px;
  line-height: 1.5;
`;
