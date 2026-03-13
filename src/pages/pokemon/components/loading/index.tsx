/**
 * @file src/pages/pokemon/components/loading/index.tsx
 * UI subcomponent used by the Pokemon list page.
 */

import type { JSX } from "react";
import * as S from "./styles";

/**
 * Renders the Loading view component.
 */
export function Loading(): JSX.Element {
  return (
    <S.Container>
      <S.Title>Carregando Pokémon...</S.Title>
    </S.Container>
  );
}
