/**
 * @file src/pages/pokemon/components/error-message/index.tsx
 * UI subcomponent used by the Pokemon list page.
 */

import type { JSX } from "react";
import * as S from "./styles";

/**
 * Renders the ErrorMessage view component.
 */
export function ErrorMessage({
  error,
}: Readonly<{ error: Error | null }>): JSX.Element {
  return (
    <S.Container>
      <S.Title>Erro ao carregar Pokémon</S.Title>
      <S.InfoText>
        {error instanceof Error ? error.message : "Erro desconhecido"}
      </S.InfoText>
    </S.Container>
  );
}
