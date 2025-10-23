import * as S from "./styles";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HomeTitle>Bem-vindo à Pokédex</S.HomeTitle>
      <S.HomeDescription>
        Explore todos os Pokémon do mundo e descubra suas características,
      </S.HomeDescription>
      <S.HomeButton to="/pokemons">Ver Pokémons</S.HomeButton>
    </S.HomeContainer>
  );
}
