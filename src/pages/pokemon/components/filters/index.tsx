import type { Dispatch, JSX } from "react";
import * as S from "./styles";

interface FiltersProps {
  searchName: string;
  setSearchName: Dispatch<React.SetStateAction<string>>;
  selectedType: string;
  setSelectedType: Dispatch<React.SetStateAction<string>>;
  selectedHeight: string;
  setSelectedHeight: Dispatch<React.SetStateAction<string>>;
  selectedGeneration: string;
  setSelectedGeneration: (generation: string) => void;
  types: { name: string; url: string }[];
  handleClearFilters: () => void;
  setChangeSprite: Dispatch<React.SetStateAction<boolean>>;
  changeSprite: boolean;
}

export function Filters({
  searchName,
  setSearchName,
  selectedType,
  setSelectedType,
  selectedHeight,
  setSelectedHeight,
  selectedGeneration,
  setSelectedGeneration,
  types,
  handleClearFilters,
  setChangeSprite,
  changeSprite,
}: Readonly<FiltersProps>): JSX.Element {
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

        <S.FilterGroup>
          <S.FilterLabel htmlFor="generation">🧬 Filtrar por Geração</S.FilterLabel>
          <S.FilterSelect
            id="generation"
            value={selectedGeneration}
            onChange={(e) => setSelectedGeneration(e.target.value)}
          >
            <S.FilterOption value="">Todas as Gerações</S.FilterOption>
            <S.FilterOption value="gen-i">GEN I (Kanto)</S.FilterOption>
            <S.FilterOption value="gen-ii">GEN II (Johto)</S.FilterOption>
            <S.FilterOption value="gen-iii">GEN III (Hoenn)</S.FilterOption>
            <S.FilterOption value="gen-iv">GEN IV (Sinnoh)</S.FilterOption>
            <S.FilterOption value="gen-v">GEN V (Unova)</S.FilterOption>
            <S.FilterOption value="gen-vi">GEN VI (Kalos)</S.FilterOption>
            <S.FilterOption value="gen-vii">GEN VII (Alola)</S.FilterOption>
            <S.FilterOption value="gen-viii">GEN VIII (Galar)</S.FilterOption>
            <S.FilterOption value="gen-ix">GEN IX (Paldea)</S.FilterOption>
          </S.FilterSelect>
        </S.FilterGroup>
      </S.FiltersRow>

      <div style={{ marginTop: "15px" }}>
        <S.ClearFiltersButton onClick={handleClearFilters}>
          Limpar Filtros
        </S.ClearFiltersButton>
        <S.ChangeSpriteButton onClick={() => setChangeSprite(!changeSprite)}>
          Ver {changeSprite ? "Normal" : "Shiny"}
        </S.ChangeSpriteButton>
      </div>
    </S.FiltersContainer>
  );
}
