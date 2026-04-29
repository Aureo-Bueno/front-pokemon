/**
 * @file src/components/layout/index.tsx
 * Reusable UI component implementation.
 */

import { Outlet } from "react-router-dom";
import * as S from "./styles";
import type { JSX } from "react";
import { Navigation } from "../navigation";

/**
 * Renders the Layout view component.
 */
export function Layout(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <S.LayoutContainer>
      <Navigation />
      <S.Main>
        <Outlet />
      </S.Main>
      <S.Footer>
        <S.FooterText>
          &copy; {currentYear} Pokédex App - Aureo Bueno
        </S.FooterText>
      </S.Footer>
    </S.LayoutContainer>
  );
}
