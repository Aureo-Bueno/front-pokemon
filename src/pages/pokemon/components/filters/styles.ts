import styled from "styled-components";

export const FiltersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  box-shadow: ${({ theme }) => theme.shadows.light};
`;

export const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xlarge};
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterLabel = styled.label`
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;

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

export const FilterOption = styled.option`
  padding: ${({ theme }) => theme.spacing.medium};
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

export const ChangeSpriteButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
  align-self: flex-end;
  margin-left: ${({ theme }) => theme.spacing.medium};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
