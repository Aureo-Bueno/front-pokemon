import * as S from "./styles";

interface PaginationProps {
  canPrevious: boolean;
  canNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export function Pagination({
  canPrevious,
  canNext,
  onPrevious,
  onNext,
}: Readonly<PaginationProps>) {
  return (
    <S.PaginationContainer>
      <S.PaginationButton $disabled={!canPrevious} onClick={onPrevious}>
        ← Anterior
      </S.PaginationButton>
      <S.PaginationButton $disabled={!canNext} onClick={onNext}>
        Próximo →
      </S.PaginationButton>
    </S.PaginationContainer>
  );
}
