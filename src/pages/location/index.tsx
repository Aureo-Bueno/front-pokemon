/**
 * @file src/pages/location/index.tsx
 * Page component responsible for one route view.
 */

import { useState, type FormEvent, type JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { locationService } from "../../services/location";
import * as S from "./styles";

/**
 * Helper function used by this page: getErrorMessage.
 */
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Erro ao buscar localização.";
}

/**
 * Renders the LocationPage view component.
 */
export function LocationPage(): JSX.Element {
  const [inputId, setInputId] = useState("1");
  const [locationId, setLocationId] = useState("1");

  const {
    data: location,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["location", locationId],
    queryFn: () => locationService.getLocationById(locationId),
  });

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedId = inputId.trim();
    if (!normalizedId) {
      return;
    }

    setLocationId(normalizedId);
  };

  const locationName =
    location?.names.find((nameEntry) => nameEntry.language.name === "pt-BR")
      ?.name ??
    location?.names.find((nameEntry) => nameEntry.language.name === "en")?.name ??
    location?.name;

  return (
    <S.Container>
      <S.Title>Consulta de Locations</S.Title>
      <S.Description>
        Busque uma localização por ID para visualizar os detalhes.
      </S.Description>

      <S.Form onSubmit={handleSearch}>
        <S.Input
          type="number"
          min="1"
          value={inputId}
          onChange={(event) => setInputId(event.target.value)}
          placeholder="Digite o ID da location"
        />
        <S.Button type="submit">Buscar</S.Button>
      </S.Form>

      {(isLoading || isFetching) && (
        <S.Feedback>Carregando localização...</S.Feedback>
      )}

      {isError && !isLoading && (
        <S.ErrorText>{getErrorMessage(error)}</S.ErrorText>
      )}

      {location && !isLoading && !isError && (
        <S.Card>
          <S.CardTitle>
            #{location.id} - {locationName}
          </S.CardTitle>

          <S.Row>Nome da API: {location.name}</S.Row>
          <S.Row>Região: {location.region?.name ?? "Sem região"}</S.Row>
          <S.Row>Total de áreas: {location.areas.length}</S.Row>

          <S.Subtitle>Áreas</S.Subtitle>
          {location.areas.length > 0 ? (
            <S.List>
              {location.areas.map((area) => (
                <S.ListItem key={area.name}>{area.name}</S.ListItem>
              ))}
            </S.List>
          ) : (
            <S.Row>Sem áreas cadastradas para esta location.</S.Row>
          )}

          <S.Subtitle>Índices de jogo</S.Subtitle>
          {location.game_indices.length > 0 ? (
            <S.List>
              {location.game_indices.map((gameIndex) => (
                <S.ListItem key={`${gameIndex.generation.name}-${gameIndex.game_index}`}>
                  {gameIndex.generation.name}: {gameIndex.game_index}
                </S.ListItem>
              ))}
            </S.List>
          ) : (
            <S.Row>Sem índices de jogo para esta location.</S.Row>
          )}
        </S.Card>
      )}
    </S.Container>
  );
}
