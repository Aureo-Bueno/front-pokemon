/**
 * @file src/pages/item/index.tsx
 * Page component responsible for one route view.
 */

import { useState, type FormEvent, type JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { itemService } from "../../services/item";
import * as S from "./styles";

/**
 * Helper function used by this page: getErrorMessage.
 */
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Erro ao buscar item.";
}

/**
 * Helper function used by this page: getEnglishEffect.
 */
function getEnglishEffect(entries: { language: { name: string }; effect: string }[]) {
  return entries.find((entry) => entry.language.name === "en")?.effect;
}

/**
 * Helper function used by this page: getEnglishFlavor.
 */
function getEnglishFlavor(
  entries: { language: { name: string }; text: string }[],
): string | undefined {
  return entries.find((entry) => entry.language.name === "en")?.text;
}

/**
 * Renders the ItemPage view component.
 */
export function ItemPage(): JSX.Element {
  const [inputId, setInputId] = useState("1");
  const [itemId, setItemId] = useState("1");

  const {
    data: item,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["item", itemId],
    queryFn: () => itemService.getItemById(itemId),
  });

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedId = inputId.trim();
    if (!normalizedId) {
      return;
    }

    setItemId(normalizedId);
  };

  const englishEffect = item ? getEnglishEffect(item.effect_entries) : undefined;
  const englishFlavor = item ? getEnglishFlavor(item.flavor_text_entries) : undefined;

  return (
    <S.Container>
      <S.Title>Consulta de Items</S.Title>
      <S.Description>
        Busque um item por ID para visualizar os detalhes.
      </S.Description>

      <S.Form onSubmit={handleSearch}>
        <S.Input
          type="number"
          min="1"
          value={inputId}
          onChange={(event) => setInputId(event.target.value)}
          placeholder="Digite o ID do item"
        />
        <S.Button type="submit">Buscar</S.Button>
      </S.Form>

      {(isLoading || isFetching) && <S.Feedback>Carregando item...</S.Feedback>}

      {isError && !isLoading && (
        <S.ErrorText>{getErrorMessage(error)}</S.ErrorText>
      )}

      {item && !isLoading && !isError && (
        <S.Card>
          <S.CardHeader>
            <S.CardTitle>
              #{item.id} - {item.name}
            </S.CardTitle>
            {item.sprites.default ? (
              <S.Sprite src={item.sprites.default} alt={item.name} />
            ) : null}
          </S.CardHeader>

          <S.Row>Categoria: {item.category.name}</S.Row>
          <S.Row>Custo: {item.cost}</S.Row>

          <S.Subtitle>Atributos</S.Subtitle>
          <S.List>
            {item.attributes.map((attribute) => (
              <S.ListItem key={attribute.name}>{attribute.name}</S.ListItem>
            ))}
          </S.List>

          {englishEffect ? (
            <>
              <S.Subtitle>Efeito (EN)</S.Subtitle>
              <S.Row>{englishEffect}</S.Row>
            </>
          ) : null}

          {englishFlavor ? (
            <>
              <S.Subtitle>Flavor Text (EN)</S.Subtitle>
              <S.Row>{englishFlavor.replaceAll("\f", " ")}</S.Row>
            </>
          ) : null}
        </S.Card>
      )}
    </S.Container>
  );
}
