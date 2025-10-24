import { useState, useEffect, Suspense } from "react";
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

export default function PokemonList() {
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null
  );
  const [searchName, setSearchName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedHeight, setSelectedHeight] = useState("");
  const [types, setTypes] = useState<TypeOption[]>([]);
  const [changeSprite, setChangeSprite] = useState<boolean>(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemons", offset],
    queryFn: () => pokemonService.getPokemonList(100, offset),
  });

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await pokemonService.getAllTypes();
        setTypes(response.results);
      } catch (err) {
        console.error("Erro ao buscar tipos:", err);
      }
    };

    fetchTypes();
  }, []);

  const pokemonDetailsQueries = useQueries({
    queries: (data?.results || []).map((pokemon) => ({
      queryKey: ["pokemon-details", pokemon.name],
      queryFn: () => pokemonService.getPokemonDetails(pokemon.name),
      staleTime: 1000 * 60 * 30, // 30 minutos
    })),
  });

  const handleClearFilters = () => {
    setSearchName("");
    setSelectedType("");
    setSelectedHeight("");
  };

  const isLoadingDetails = pokemonDetailsQueries.some((q) => q.isLoading);

  return (
    <>
      {isError && !isLoading && <ErrorMessage error={error} />}

      {!isLoading && !isLoadingDetails && (
        <S.Container>
          <S.Title>Pokédex - Lista de Pokémon</S.Title>
          <S.InfoText>Total de Pokémon: {data?.count}</S.InfoText>

          <Filters
            searchName={searchName}
            setSearchName={setSearchName}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedHeight={selectedHeight}
            setSelectedHeight={setSelectedHeight}
            types={types}
            handleClearFilters={handleClearFilters}
            setChangeSprite={setChangeSprite}
            changeSprite={changeSprite}
          />

          <Suspense fallback={<Loading />}>
            <List
              setSelectedPokemon={setSelectedPokemon}
              data={data}
              pokemonDetailsQueries={pokemonDetailsQueries}
              searchName={searchName}
              selectedType={selectedType}
              selectedHeight={selectedHeight}
              handleClearFilters={handleClearFilters}
              isLoading={isLoading}
              isLoadingDetails={isLoadingDetails}
              changeSprite={changeSprite}
            />
          </Suspense>

          <Pagination setOffset={setOffset} offset={offset} data={data} />

          {selectedPokemon && (
            <Modal
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
              changeSprite={changeSprite}
            />
          )}
        </S.Container>
      )}
    </>
  );
}
