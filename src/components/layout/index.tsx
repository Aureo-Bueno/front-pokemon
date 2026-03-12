import { Outlet } from "react-router-dom";
import * as S from "./styles";
import type { JSX } from "react";
import { Navigation } from "../navigation";

export function Layout(): JSX.Element {
  return (
    <S.LayoutContainer>
      <Navigation />
      <S.Main>
        <Outlet />
      </S.Main>
      <S.Footer>
        <S.FooterText>&copy; 2025 Pokédex App - Aureo Bueno</S.FooterText>
      </S.Footer>
    </S.LayoutContainer>
  );
}
