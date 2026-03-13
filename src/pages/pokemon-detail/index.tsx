/**
 * @file src/pages/pokemon-detail/index.tsx
 * Page component responsible for one route view.
 */

import { useMemo, type JSX } from "react";
import { useParams } from "react-router-dom";
import { useQueries, useQuery } from "@tanstack/react-query";
import { pokemonService } from "../../services/pokemon";
import { movesService } from "../../services/move";
import type { MoveResponse } from "../../types/move";
import * as S from "./styles";

/**
 * Helper function used by this page: getErrorMessage.
 */
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Erro ao buscar detalhes do Pokémon.";
}

/**
 * Helper function used by this page: normalizeText.
 */
function normalizeText(text: string): string {
  return text.replaceAll("\n", " ").replaceAll("\f", " ");
}

/**
 * Helper function used by this page: isMoveResponse.
 */
function isMoveResponse(move: MoveResponse | undefined): move is MoveResponse {
  return Boolean(move);
}

/**
 * Helper function used by this page: getGenerationRegionLabel.
 */
function getGenerationRegionLabel(generationName: string): string {
  const generationRegionMap: Record<string, string> = {
    "generation-i": "Kanto",
    "generation-ii": "Johto",
    "generation-iii": "Hoenn",
    "generation-iv": "Sinnoh",
    "generation-v": "Unova",
    "generation-vi": "Kalos",
    "generation-vii": "Alola",
    "generation-viii": "Galar",
    "generation-ix": "Paldea",
  };

  return generationRegionMap[generationName] ?? "Região desconhecida";
}

/**
 * Renders the PokemonDetailPage view component.
 */
export function PokemonDetailPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const {
    data: pokemon,
    isLoading: isLoadingPokemon,
    isError: isErrorPokemon,
    error: pokemonError,
  } = useQuery({
    queryKey: ["pokemon-detail-page", id],
    queryFn: () => pokemonService.getPokemonDetails(id ?? ""),
    enabled: Boolean(id),
  });

  const { data: species } = useQuery({
    queryKey: ["pokemon-species", id],
    queryFn: () => pokemonService.getPokemonSpecies(id ?? ""),
    enabled: Boolean(id),
  });

  const natureId = pokemon ? String(((pokemon.id - 1) % 25) + 1) : undefined;

  const { data: nature, isLoading: isLoadingNature } = useQuery({
    queryKey: ["pokemon-nature", natureId],
    queryFn: () => pokemonService.getNaturePokemonById(natureId ?? ""),
    enabled: Boolean(natureId),
  });

  const moveQueries = useQueries({
    queries: (pokemon?.moves ?? []).slice(0, 12).map((entry) => ({
      queryKey: ["move-detail", entry.move.name],
      queryFn: () => movesService.getMoveById(entry.move.name),
      staleTime: 1000 * 60 * 30,
    })),
  });

  const moveDetails = useMemo(
    () => moveQueries.map((query) => query.data).filter(isMoveResponse),
    [moveQueries],
  );

  const pokemonDescription = useMemo(() => {
    if (!species) {
      return undefined;
    }

    const ptEntry = species.flavor_text_entries.find(
      (entry) => entry.language.name === "pt-BR",
    );
    const enEntry = species.flavor_text_entries.find(
      (entry) => entry.language.name === "en",
    );

    return normalizeText(ptEntry?.flavor_text ?? enEntry?.flavor_text ?? "");
  }, [species]);

  const isLoadingMoves = moveQueries.some((query) => query.isLoading);
  const introducedGenerationCode = species?.generation?.name
    ? species.generation.name.replace("generation-", "GEN ").toUpperCase()
    : undefined;
  const introducedGenerationRegion = species?.generation?.name
    ? getGenerationRegionLabel(species.generation.name)
    : undefined;

  if (!id) {
    return <S.ErrorText>ID do Pokémon inválido.</S.ErrorText>;
  }

  if (isLoadingPokemon) {
    return <S.Feedback>Carregando Pokémon...</S.Feedback>;
  }

  if (isErrorPokemon || !pokemon) {
    return <S.ErrorText>{getErrorMessage(pokemonError)}</S.ErrorText>;
  }

  return (
    <S.Container>
      <S.BackLink to="/pokemons">Voltar para Pokémons</S.BackLink>

      <S.Card>
        <S.Header>
          <S.Sprite
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <div>
            <S.Title>
              #{pokemon.id} - {pokemon.name}
            </S.Title>
            <S.Row>Tipos: {pokemon.types.map((type) => type.type.name).join(", ")}</S.Row>
            <S.Row>Altura: {pokemon.height / 10}m</S.Row>
            <S.Row>Peso: {pokemon.weight / 10}kg</S.Row>
            <S.Row>
              Introduzido em:{" "}
              {introducedGenerationCode
                ? `${introducedGenerationCode} (${introducedGenerationRegion})`
                : "Não informado"}
            </S.Row>
          </div>
        </S.Header>

        {pokemonDescription ? (
          <S.Description>{pokemonDescription}</S.Description>
        ) : (
          <S.Description>Descrição não encontrada.</S.Description>
        )}

        <S.Subtitle>Nature</S.Subtitle>
        {isLoadingNature ? <S.Feedback>Carregando nature...</S.Feedback> : null}
        {nature ? (
          <>
            <S.Row>Nature: {nature.name}</S.Row>
            <S.Row>
              Aumenta: {nature.increased_stat?.name ?? "nenhum"} | Diminui:{" "}
              {nature.decreased_stat?.name ?? "nenhum"}
            </S.Row>
            <S.Row>
              Gosta: {nature.likes_flavor?.name ?? "nenhum"} | Não gosta:{" "}
              {nature.hates_flavor?.name ?? "nenhum"}
            </S.Row>
          </>
        ) : (
          <S.Row>Nature não encontrada para este Pokémon.</S.Row>
        )}

        <S.Subtitle>Movements</S.Subtitle>

        {isLoadingMoves ? <S.Feedback>Carregando movimentos...</S.Feedback> : null}

        <S.MovesList>
          {moveDetails.map((move) => {
            const effect = move.effect_entries.find(
              (entry) => entry.language.name === "en",
            );

            return (
              <S.MoveItem key={move.name}>
                <S.MoveName>{move.name}</S.MoveName>
                <S.Row>
                  Tipo: {move.type.name} | Classe: {move.damage_class.name}
                </S.Row>
                <S.Row>
                  Poder: {move.power ?? "-"} | PP: {move.pp ?? "-"} | Precisão:{" "}
                  {move.accuracy ?? "-"}
                </S.Row>
                <S.Row>{effect?.short_effect ?? "Sem descrição para o movimento."}</S.Row>
              </S.MoveItem>
            );
          })}
        </S.MovesList>
      </S.Card>
    </S.Container>
  );
}
