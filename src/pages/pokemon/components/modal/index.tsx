import { useQuery } from "@tanstack/react-query";
import * as S from "./styles";
import { pokemonService } from "../../../../services/pokemon";
import { type Dispatch, type JSX } from "react";
import type { PokemonDetails } from "../../../../types/pokemon";
import { Loading } from "../loading";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  selectedPokemon: PokemonDetails | null;
  setSelectedPokemon: Dispatch<React.SetStateAction<PokemonDetails | null>>;
  changeSprite: boolean;
}

export function Modal({
  selectedPokemon,
  setSelectedPokemon,
  changeSprite,
}: Readonly<ModalProps>): JSX.Element {
  const navigate = useNavigate();

  const { data: pokemonDetails, isLoading } = useQuery({
    queryKey: ["pokemon-details", selectedPokemon?.name],
    queryFn: () => pokemonService.getPokemonDetails(selectedPokemon!.name),
    enabled: !!selectedPokemon,
  });

  return (
    <S.ModalOverlay onClick={() => setSelectedPokemon(null)}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {isLoading && <Loading />}
        {pokemonDetails && !isLoading && (
          <>
            <S.ModalTitle>{pokemonDetails.name}</S.ModalTitle>
            <S.ModalImage
              src={
                changeSprite
                  ? pokemonDetails.sprites.other["official-artwork"].front_shiny
                  : pokemonDetails.sprites.other["official-artwork"]
                      .front_default
              }
              alt={pokemonDetails.name}
            />
            <S.ModalInfoSection>
              <S.ModalInfoItem>
                <strong>Altura:</strong> {pokemonDetails.height / 10}m
              </S.ModalInfoItem>
              <S.ModalInfoItem>
                <strong>Peso:</strong> {pokemonDetails.weight / 10}kg
              </S.ModalInfoItem>
              <S.ModalInfoItem>
                <strong>Tipos:</strong>{" "}
                {pokemonDetails.types.map((t) => t.type.name).join(", ")}
              </S.ModalInfoItem>
              <S.ModalInfoItem style={{ marginTop: "15px" }}>
                <strong>Estatísticas:</strong>
              </S.ModalInfoItem>
              {pokemonDetails.stats.map((stat) => (
                <S.ModalStatItem key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </S.ModalStatItem>
              ))}
            </S.ModalInfoSection>
          </>
        )}

        {pokemonDetails && !isLoading && (
          <S.RedirectButton
            onClick={() => {
              navigate(`/pokemons/${pokemonDetails.id}`);
              setSelectedPokemon(null);
            }}
          >
            Ver detalhes e movimentos
          </S.RedirectButton>
        )}

        <S.CloseButton onClick={() => setSelectedPokemon(null)}>
          Fechar
        </S.CloseButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
