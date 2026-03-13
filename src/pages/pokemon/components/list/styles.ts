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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: ${({ theme }) => theme.spacing.large};
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
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: PokemonImage.
 */
export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 84px;
    height: 84px;
  }
`;

/**
 * Styled component: PokemonName.
 */
export const PokemonName = styled.h3`
  text-transform: capitalize;
  margin: ${({ theme }) => theme.spacing.xlarge} 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.large} 0;
    font-size: 17px;
  }
`;

/**
 * Styled component: PokemonId.
 */
export const PokemonId = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
`;

/**
 * Styled component: NoResultsContainer.
 */
export const NoResultsContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxlarge};
  color: ${({ theme }) => theme.colors.textLight};
`;

/**
 * Styled component: NoResultsText.
 */
export const NoResultsText = styled.p`
  font-size: 18px;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
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
`;

/**
 * Styled component: PokemonMeta.
 */
export const PokemonMeta = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.small};
`;

/**
 * Styled component: PokemonMetaLine.
 */
export const PokemonMetaLine = styled.div`
  overflow-wrap: anywhere;
`;
