import { useMemo, type Dispatch, type JSX } from "react";
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
  selectedGeneration: string;
  handleClearFilters: () => void;
  isLoading: boolean;
  isLoadingDetails: boolean;
  changeSprite: boolean;
}

function getGenerationByPokemonId(id: number): string {
  if (id <= 151) return "gen-i";
  if (id <= 251) return "gen-ii";
  if (id <= 386) return "gen-iii";
  if (id <= 493) return "gen-iv";
  if (id <= 649) return "gen-v";
  if (id <= 721) return "gen-vi";
  if (id <= 809) return "gen-vii";
  if (id <= 905) return "gen-viii";
  return "gen-ix";
}

export function List({
  setSelectedPokemon,
  data,
  pokemonDetailsQueries,
  searchName,
  selectedType,
  selectedHeight,
  selectedGeneration,
  handleClearFilters,
  isLoading,
  isLoadingDetails,
  changeSprite,
}: Readonly<PokemonListProps>): JSX.Element {
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
          (t) => t.type.name === selectedType,
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

      if (selectedGeneration && pokemon.details) {
        const pokemonGeneration = getGenerationByPokemonId(pokemon.details.id);
        if (pokemonGeneration !== selectedGeneration) return false;
      }

      return true;
    });
  }, [
    pokemonWithDetails,
    searchName,
    selectedType,
    selectedHeight,
    selectedGeneration,
  ]);

  return (
    <>
      {isLoading && isLoadingDetails && <Loading />}

      {!isLoading && !isLoadingDetails && (
        <>
          {filteredPokemon.slice(0, limit).length > 0 ? (
            <S.PokemonGrid>
              {filteredPokemon.slice(0, limit).map((pokemon) => {
                if (!pokemon.details) return null;
                const details = pokemon.details;

                const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
                const spriteDefault = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
                const spriteShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`;

                return (
                  <S.PokemonCard
                    key={pokemon.name}
                    onClick={() => handlePokemonClick(pokemon.name)}
                  >
                    <S.PokemonImage
                      src={changeSprite ? spriteShiny : spriteDefault}
                      alt={pokemon.name}
                    />
                    <S.PokemonName>{pokemon.name}</S.PokemonName>
                    <S.PokemonId>#{pokemonId}</S.PokemonId>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#666",
                        marginTop: "8px",
                      }}
                    >
                      <div>{details.types.map((t) => t.type.name).join(", ")}</div>
                      <div>{details.height / 10}m</div>
                    </div>
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
