import { useMemo, type Dispatch } from "react";
import { pokemonService } from "../../../../services/pokemon";
import * as S from "./styles";
import type {
  PokemonDetails,
  PokemonListResponse,
} from "../../../../types/pokemon";
import type { UseQueryResult } from "@tanstack/react-query";
import { Loading } from "../loading";

interface PokemonListProps {
  setSelectedPokemon: Dispatch<React.SetStateAction<PokemonDetails | null>>;
  data: PokemonListResponse | undefined;
  pokemonDetailsQueries: UseQueryResult<PokemonDetails, Error>[];
  searchName: string;
  selectedType: string;
  selectedHeight: string;
  handleClearFilters: () => void;
  isLoading: boolean;
  isLoadingDetails: boolean;
}

export function List({
  setSelectedPokemon,
  data,
  pokemonDetailsQueries,
  searchName,
  selectedType,
  selectedHeight,
  handleClearFilters,
  isLoading,
  isLoadingDetails,
}: PokemonListProps) {
  const limit = 20;

  const handlePokemonClick = async (name: string) => {
    const details = await pokemonService.getPokemonDetails(name);
    setSelectedPokemon(details);
  };

  const pokemonWithDetails = useMemo(() => {
    return (data?.results || []).map((pokemon, index) => ({
      ...pokemon,
      details: pokemonDetailsQueries[index]?.data,
    }));
  }, [data?.results, pokemonDetailsQueries]);

  const filteredPokemon = useMemo(() => {
    return pokemonWithDetails.filter((pokemon) => {
      const matchesName = pokemon.name
        .toLowerCase()
        .includes(searchName.toLowerCase());

      if (!matchesName) return false;

      if (selectedType && pokemon.details) {
        const hasType = pokemon.details.types.some(
          (t) => t.type.name === selectedType
        );
        if (!hasType) return false;
      }

      if (selectedHeight && pokemon.details) {
        const heightInMeters = pokemon.details.height / 10;

        if (selectedHeight === "small" && heightInMeters >= 0.5) return false;
        if (
          selectedHeight === "medium" &&
          (heightInMeters < 0.5 || heightInMeters > 1.5)
        )
          return false;
        if (selectedHeight === "large" && heightInMeters <= 1.5) return false;
      }

      return true;
    });
  }, [pokemonWithDetails, searchName, selectedType, selectedHeight]);

  return (
    <>
      {isLoading && isLoadingDetails && <Loading />}

      {!isLoading && !isLoadingDetails && (
        <>
          {filteredPokemon.slice(0, limit).length > 0 ? (
            <S.PokemonGrid>
              {filteredPokemon.slice(0, limit).map((pokemon) => {
                const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
                const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

                return (
                  <S.PokemonCard
                    key={pokemon.name}
                    onClick={() => handlePokemonClick(pokemon.name)}
                  >
                    <S.PokemonImage src={imageUrl} alt={pokemon.name} />
                    <S.PokemonName>{pokemon.name}</S.PokemonName>
                    <S.PokemonId>#{pokemonId}</S.PokemonId>
                    {pokemon.details && (
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#666",
                          marginTop: "8px",
                        }}
                      >
                        <div>
                          {pokemon.details.types
                            .map((t) => t.type.name)
                            .join(", ")}
                        </div>
                        <div>{pokemon.details.height / 10}m</div>
                      </div>
                    )}
                  </S.PokemonCard>
                );
              })}
            </S.PokemonGrid>
          ) : (
            <S.NoResultsContainer>
              <S.NoResultsText>
                😞 Nenhum Pokémon encontrado com os filtros aplicados.
              </S.NoResultsText>
              <S.ClearFiltersButton onClick={handleClearFilters}>
                Limpar Filtros
              </S.ClearFiltersButton>
            </S.NoResultsContainer>
          )}
        </>
      )}
    </>
  );
}
