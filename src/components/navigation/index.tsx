/**
 * @file src/components/navigation/index.tsx
 * Reusable UI component implementation.
 */

import type { JSX } from "react";
import * as S from "./styles";

/**
 * Renders the Navigation view component.
 */
export function Navigation(): JSX.Element {
  return (
    <S.Nav>
      <S.NavBrand to="/">
        <S.NavMark aria-hidden="true">
          <span />
        </S.NavMark>
        <span>Pokédex</span>
      </S.NavBrand>
      <S.NavLinks>
        <S.NavLink to="/" end>
          Home
        </S.NavLink>
        <S.NavLink to="/pokemons">Pokémon</S.NavLink>
        <S.NavLink to="/berries">Berries</S.NavLink>
        <S.NavLink to="/items">Items</S.NavLink>
        <S.NavLink to="/locations">Locations</S.NavLink>
      </S.NavLinks>
    </S.Nav>
  );
}
