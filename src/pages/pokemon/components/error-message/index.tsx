import * as S from "./styles";

export function ErrorMessage({ error }: { error: Error | null }) {
  return (
    <S.Container>
      <S.Title style={{ color: "red" }}>Erro ao carregar Pokémon</S.Title>
      <S.InfoText>
        {error instanceof Error ? error.message : "Erro desconhecido"}
      </S.InfoText>
    </S.Container>
  );
}
