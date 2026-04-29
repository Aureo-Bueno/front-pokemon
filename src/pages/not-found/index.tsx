/**
 * @file src/pages/not-found/index.tsx
 * Page component responsible for one route view.
 */

import type { JSX } from "react";
import * as S from "./styles";

/**
 * Renders the NotFound view component.
 */
export function NotFound(): JSX.Element {
  return (
    <S.Container>
      <S.Card>
        <S.Code>404</S.Code>
        <S.Title>Página não encontrada</S.Title>
        <S.Description>
          A rota solicitada não existe ou foi movida. Volte para a home e siga
          explorando a Pokédex.
        </S.Description>
        <S.Action to="/">Voltar para Home</S.Action>
      </S.Card>
    </S.Container>
  );
}
