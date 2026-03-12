import type { JSX } from "react";
import * as S from "./styles";

export function ErrorMessage({
  error,
}: Readonly<{ error: Error | null }>): JSX.Element {
  return (
    <S.Container>
      <S.Title style={{ color: "red" }}>Erro ao carregar Pokémon</S.Title>
      <S.InfoText>
        {error instanceof Error ? error.message : "Erro desconhecido"}
      </S.InfoText>
    </S.Container>
  );
}
