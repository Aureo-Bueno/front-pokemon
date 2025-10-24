import { Outlet } from "react-router-dom";
import Navigation from "../navigation";
import * as S from "./styles";

export default function Layout() {
  return (
    <S.LayoutContainer>
      <Navigation />
      <S.Main>
        <Outlet />
      </S.Main>
      <S.Footer>
        <S.FooterText>
          &copy; 2025 Pokédex App - Aureo Bueno
        </S.FooterText>
      </S.Footer>
    </S.LayoutContainer>
  );
}
