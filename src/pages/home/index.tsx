/**
 * @file src/pages/home/index.tsx
 * Page component responsible for one route view.
 */

import type { JSX } from "react";
import * as S from "./styles";

/**
 * Renders the Home view component.
 */
export function Home(): JSX.Element {
  return (
    <S.HomeContainer>
      <S.HomeTitle>Bem-vindo à Pokédex</S.HomeTitle>
      <S.HomeDescription>
        Explore dados da PokeAPI em uma interface única com busca, filtros e
        páginas de detalhe.
      </S.HomeDescription>

      <S.HomeDetailsCard>
        <S.HomeDetailsTitle>O que esta aplicação faz</S.HomeDetailsTitle>
        <S.HomeDetailsList>
          <S.HomeDetailsItem>
            Lista Pokémon com paginação e permite filtrar por nome, tipo e
            altura.
          </S.HomeDetailsItem>
          <S.HomeDetailsItem>
            Abre modal com resumo do Pokémon selecionado (imagem, tipos, peso,
            altura e stats).
          </S.HomeDetailsItem>
          <S.HomeDetailsItem>
            Permite navegar para uma página completa do Pokémon com descrição,
            geração de introdução, nature e movimentos com detalhes.
          </S.HomeDetailsItem>
          <S.HomeDetailsItem>
            Possui páginas dedicadas para consultar Berries, Items e Locations
            por ID, exibindo seus dados principais.
          </S.HomeDetailsItem>
        </S.HomeDetailsList>
      </S.HomeDetailsCard>

      <S.HomeButtons>
        <S.HomeButton to="/pokemons">Ver Pokémons</S.HomeButton>
        <S.HomeButton to="/berries">Ver Berries</S.HomeButton>
        <S.HomeButton to="/items">Ver Items</S.HomeButton>
        <S.HomeButton to="/locations">Ver Locations</S.HomeButton>
      </S.HomeButtons>
    </S.HomeContainer>
  );
}
