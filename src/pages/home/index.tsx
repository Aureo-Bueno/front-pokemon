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
      <S.HomeHero>
        <S.HomeEyebrow>Pokédex interface</S.HomeEyebrow>
        <S.HomeTitle>Uma Pokédex com presença visual mais forte.</S.HomeTitle>
        <S.HomeDescription>
          Explore Pokémon, berries, items e locations em uma experiência mais
          limpa, contrastada e confortável de navegar.
        </S.HomeDescription>

        <S.HomeButtons>
          <S.HomeButton $variant="primary" to="/pokemons">
            Ver Pokémons
          </S.HomeButton>
          <S.HomeButton $variant="secondary" to="/berries">
            Ver Berries
          </S.HomeButton>
          <S.HomeButton $variant="secondary" to="/items">
            Ver Items
          </S.HomeButton>
          <S.HomeButton $variant="secondary" to="/locations">
            Ver Locations
          </S.HomeButton>
        </S.HomeButtons>

        <S.HomeStats>
          <S.HomeStat>
            <strong>Lista + filtros</strong>
            <span>Busca, geração, tipo, altura e sprites.</span>
          </S.HomeStat>
          <S.HomeStat>
            <strong>Detalhe rico</strong>
            <span>Descrição, nature, movimentos e stats.</span>
          </S.HomeStat>
          <S.HomeStat>
            <strong>Consultas rápidas</strong>
            <span>Berries, items e locations por ID.</span>
          </S.HomeStat>
        </S.HomeStats>
      </S.HomeHero>

      <S.HomeDetailsCard>
        <S.HomeDetailsTitle>O que esta aplicação faz</S.HomeDetailsTitle>
        <S.HomeDetailsList>
          <S.HomeDetailsItem>
            Lista Pokémon com paginação e permite filtrar por nome, tipo e
            altura.
          </S.HomeDetailsItem>
          <S.HomeDetailsItem>
            Abre modal com resumo do Pokémon selecionado, incluindo imagem,
            tipos, peso, altura e stats.
          </S.HomeDetailsItem>
          <S.HomeDetailsItem>
            Permite navegar para uma página completa do Pokémon com descrição,
            geração de introdução, nature e movimentos.
          </S.HomeDetailsItem>
          <S.HomeDetailsItem>
            Possui páginas dedicadas para consultar Berries, Items e Locations
            por ID.
          </S.HomeDetailsItem>
        </S.HomeDetailsList>
      </S.HomeDetailsCard>
    </S.HomeContainer>
  );
}
