import type { PokemonListResponse } from "../../../../types/pokemon";
import * as S from "./styles";

interface PaginationProps {
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
  data: PokemonListResponse | undefined;
}

export function Pagination({ setOffset, offset, data }: PaginationProps) {
  const handleNextPage = () => {
    if (data?.next) {
      setOffset(offset + 100);
    }
  };

  const handlePreviousPage = () => {
    if (data?.previous && offset >= 100) {
      setOffset(offset - 100);
    }
  };
  return (
    <S.PaginationContainer>
      <S.PaginationButton
        $disabled={!data?.previous}
        onClick={handlePreviousPage}
      >
        ← Anterior
      </S.PaginationButton>
      <S.PaginationButton $disabled={!data?.next} onClick={handleNextPage}>
        Próximo →
      </S.PaginationButton>
    </S.PaginationContainer>
  );
}
