/**
 * @file src/pages/berry/index.tsx
 * Page component responsible for one route view.
 */

import { useState, type FormEvent, type JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { berryService } from "../../services/berry";
import * as S from "./styles";

/**
 * Helper function used by this page: getErrorMessage.
 */
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Erro ao buscar berry.";
}

/**
 * Renders the BerryPage view component.
 */
export function BerryPage(): JSX.Element {
  const [inputId, setInputId] = useState("1");
  const [berryId, setBerryId] = useState("1");

  const {
    data: berry,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["berry", berryId],
    queryFn: () => berryService.getBerryById(berryId),
  });

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedId = inputId.trim();
    if (!normalizedId) {
      return;
    }

    setBerryId(normalizedId);
  };

  return (
    <S.Container>
      <S.Title>Consulta de Berries</S.Title>
      <S.Description>
        Busque uma berry por ID para visualizar os detalhes.
      </S.Description>

      <S.Form onSubmit={handleSearch}>
        <S.Input
          type="number"
          min="1"
          value={inputId}
          onChange={(event) => setInputId(event.target.value)}
          placeholder="Digite o ID da berry"
        />
        <S.Button type="submit">Buscar</S.Button>
      </S.Form>

      {(isLoading || isFetching) && <S.Feedback>Carregando berry...</S.Feedback>}

      {isError && !isLoading && (
        <S.ErrorText>{getErrorMessage(error)}</S.ErrorText>
      )}

      {berry && !isLoading && !isError && (
        <S.Card>
          <S.CardTitle>
            #{berry.id} - {berry.name}
          </S.CardTitle>
          <S.Row>Item: {berry.item.name}</S.Row>
          <S.Row>Firmeza: {berry.firmness.name}</S.Row>
          <S.Row>Tipo do presente natural: {berry.natural_gift_type.name}</S.Row>
          <S.Row>Tempo de crescimento: {berry.growth_time}</S.Row>
          <S.Row>Colheita máxima: {berry.max_harvest}</S.Row>
          <S.Row>Tamanho: {berry.size}</S.Row>
          <S.Row>Suavidade: {berry.smoothness}</S.Row>
          <S.Row>Ressecamento do solo: {berry.soil_dryness}</S.Row>

          <S.Subtitle>Sabores</S.Subtitle>
          <S.List>
            {berry.flavors.map((flavor) => (
              <S.ListItem key={flavor.flavor.name}>
                {flavor.flavor.name}: {flavor.potency}
              </S.ListItem>
            ))}
          </S.List>
        </S.Card>
      )}
    </S.Container>
  );
}
