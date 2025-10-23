import * as S from './styles';

export default function Navigation() {
  return (
    <S.Nav>
      <S.NavBrand to="/">🔴 Pokédex</S.NavBrand>

      <S.NavLinks>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="/pokemons">Pokémon</S.NavLink>
      </S.NavLinks>
    </S.Nav>
  );
}
