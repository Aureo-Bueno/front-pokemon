import type { Dispatch } from "react";
import * as S from "./styles";

interface FiltersProps {
  searchName: string;
  setSearchName: Dispatch<React.SetStateAction<string>>;
  selectedType: string;
  setSelectedType: Dispatch<React.SetStateAction<string>>;
  selectedHeight: string;
  setSelectedHeight: Dispatch<React.SetStateAction<string>>;
  types: { name: string; url: string }[];
  handleClearFilters: () => void;
}

export function Filters({
  searchName,
  setSearchName,
  selectedType,
  setSelectedType,
  selectedHeight,
  setSelectedHeight,
  types,
  handleClearFilters,
}: FiltersProps) {
  return (
    <S.FiltersContainer>
      <S.FiltersRow>
        <S.FilterGroup>
          <S.FilterLabel htmlFor="search">🔍 Buscar por Nome</S.FilterLabel>
          <S.FilterInput
            id="search"
            type="text"
            placeholder="Digite o nome do Pokémon..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </S.FilterGroup>

        <S.FilterGroup>
          <S.FilterLabel htmlFor="type">⚡ Filtrar por Tipo</S.FilterLabel>
          <S.FilterSelect
            id="type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <S.FilterOption value="">Todos os Tipos</S.FilterOption>
            {types.map((type) => (
              <S.FilterOption key={type.name} value={type.name}>
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </S.FilterOption>
            ))}
          </S.FilterSelect>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.FilterLabel htmlFor="height">📏 Filtrar por Altura</S.FilterLabel>
          <S.FilterSelect
            id="height"
            value={selectedHeight}
            onChange={(e) => setSelectedHeight(e.target.value)}
          >
            <S.FilterOption value="">Qualquer Altura</S.FilterOption>
            <S.FilterOption value="small">Pequeno (&lt; 0.5m)</S.FilterOption>
            <S.FilterOption value="medium">Médio (0.5m - 1.5m)</S.FilterOption>
            <S.FilterOption value="large">Grande (&gt; 1.5m)</S.FilterOption>
          </S.FilterSelect>
        </S.FilterGroup>
      </S.FiltersRow>

      <div style={{ marginTop: "15px" }}>
        <S.ClearFiltersButton onClick={handleClearFilters}>
          Limpar Filtros
        </S.ClearFiltersButton>
      </div>
    </S.FiltersContainer>
  );
}
