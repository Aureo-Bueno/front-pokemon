import styled from "styled-components";

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
`;

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
`;

export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const PokemonName = styled.h3`
  text-transform: capitalize;
  margin: ${({ theme }) => theme.spacing.xlarge} 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const PokemonId = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
`;

export const NoResultsContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxlarge};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const NoResultsText = styled.p`
  font-size: 18px;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

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
