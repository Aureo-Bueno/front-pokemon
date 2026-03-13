/**
 * @file src/pages/pokemon/index.tsx
 * Page component responsible for one route view.
 */

import { useState, type JSX } from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import type { PokemonDetails } from "../../types/pokemon";
import { pokemonService } from "../../services/pokemon";
import * as S from "./styles";
import { ErrorMessage } from "./components/error-message";
import { Filters } from "./components/filters";
import { List } from "./components/list";
import { Pagination } from "./components/pagination";
import { Modal } from "./components/modal";
import { Loading } from "./components/loading";

interface TypeOption {
  name: string;
  url: string;
}

const GENERATION_RANGES: Record<string, { start: number; end: number }> = {
  "gen-i": { start: 1, end: 151 },
  "gen-ii": { start: 152, end: 251 },
  "gen-iii": { start: 252, end: 386 },
  "gen-iv": { start: 387, end: 493 },
  "gen-v": { start: 494, end: 649 },
  "gen-vi": { start: 650, end: 721 },
  "gen-vii": { start: 722, end: 809 },
  "gen-viii": { start: 810, end: 905 },
  "gen-ix": { start: 906, end: 1025 },
};

/**
 * Renders the PokemonList view component.
 */
export function PokemonList(): JSX.Element {
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null,
  );
  const [searchName, setSearchName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedHeight, setSelectedHeight] = useState("");
  const [selectedGeneration, setSelectedGeneration] = useState("");
  const [changeSprite, setChangeSprite] = useState<boolean>(false);

  const generationRange = selectedGeneration
    ? GENERATION_RANGES[selectedGeneration]
    : undefined;
  const generationCount = generationRange
    ? generationRange.end - generationRange.start + 1
    : undefined;
  const apiOffset = generationRange ? generationRange.start - 1 + offset : offset;
  const apiLimit = generationRange
    ? Math.min(20, Math.max(0, (generationCount ?? 0) - offset))
    : 20;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemons", selectedGeneration, offset],
    queryFn: () => pokemonService.getPokemonList(apiLimit, apiOffset),
  });

  const { data: pokemonTypes } = useQuery({
    queryKey: ["pokemon-types"],
    queryFn: () => pokemonService.getAllTypes(),
  });

  const types: TypeOption[] = pokemonTypes?.results ?? [];

  const pokemonDetailsQueries = useQueries({
    queries: (data?.results || []).map((pokemon) => ({
      queryKey: ["pokemon-details", pokemon.name],
      queryFn: () => pokemonService.getPokemonDetails(pokemon.name),
      staleTime: 1000 * 60 * 30,
    })),
  });

  const handleClearFilters = () => {
    setOffset(0);
    setSearchName("");
    setSelectedType("");
    setSelectedHeight("");
    setSelectedGeneration("");
  };

  const handleGenerationChange = (generation: string) => {
    setSelectedGeneration(generation);
    setOffset(0);
  };

  const handleNextPage = () => {
    if (generationCount) {
      if (offset + 20 < generationCount) {
        setOffset((currentOffset) => currentOffset + 20);
      }
      return;
    }

    if (data?.next) {
      setOffset((currentOffset) => currentOffset + 20);
    }
  };

  const handlePreviousPage = () => {
    if (offset > 0) {
      setOffset((currentOffset) => Math.max(currentOffset - 20, 0));
    }
  };

  const canPrevious = offset > 0;
  const canNext = generationCount ? offset + 20 < generationCount : Boolean(data?.next);

  const isLoadingDetails = pokemonDetailsQueries.some((q) => q.isLoading);

  return (
      <S.Container>
      <S.Title>Pokédex - Lista de Pokémon</S.Title>
      <S.InfoText>Total de Pokémon: {generationCount ?? data?.count}</S.InfoText>

      <Filters
        searchName={searchName}
        setSearchName={setSearchName}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedHeight={selectedHeight}
        setSelectedHeight={setSelectedHeight}
        selectedGeneration={selectedGeneration}
        setSelectedGeneration={handleGenerationChange}
        types={types}
        handleClearFilters={handleClearFilters}
        setChangeSprite={setChangeSprite}
        changeSprite={changeSprite}
      />

      {isLoading && !data && !isError && <Loading />}

      {isError && !isLoading && !isLoadingDetails && (
        <ErrorMessage error={error} />
      )}

      {!isLoading && data && !isLoadingDetails && !isError && (
        <List
          setSelectedPokemon={setSelectedPokemon}
          data={data}
          pokemonDetailsQueries={pokemonDetailsQueries}
          searchName={searchName}
          selectedType={selectedType}
          selectedHeight={selectedHeight}
          selectedGeneration={selectedGeneration}
          handleClearFilters={handleClearFilters}
          isLoading={isLoading}
          isLoadingDetails={isLoadingDetails}
          changeSprite={changeSprite}
        />
      )}

      {!isLoading && data && !isLoadingDetails && !isError && (
        <Pagination
          canPrevious={canPrevious}
          canNext={canNext}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />
      )}

      {selectedPokemon && (
        <Modal
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          changeSprite={changeSprite}
        />
      )}
    </S.Container>
  );
}
