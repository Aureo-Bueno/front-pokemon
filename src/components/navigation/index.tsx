import type { JSX } from "react";
import * as S from "./styles";

export function Navigation(): JSX.Element {
  return (
    <S.Nav>
      <S.NavBrand to="/">🔴 Pokédex</S.NavBrand>

      <S.NavLinks>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="/pokemons">Pokémon</S.NavLink>
        <S.NavLink to="/berries">Berries</S.NavLink>
        <S.NavLink to="/items">Items</S.NavLink>
        <S.NavLink to="/locations">Locations</S.NavLink>
      </S.NavLinks>
    </S.Nav>
  );
}
