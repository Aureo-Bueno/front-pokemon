import type { JSX } from "react";
import * as S from "./styles";

export function Loading(): JSX.Element {
  return (
    <S.Container>
      <S.Title>Carregando Pokémon...</S.Title>
    </S.Container>
  );
}
