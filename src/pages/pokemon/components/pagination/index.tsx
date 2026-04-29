/**
 * @file src/pages/pokemon/components/pagination/index.tsx
 * UI subcomponent used by the Pokemon list page.
 */

import * as S from "./styles";

interface PaginationProps {
  canPrevious: boolean;
  canNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

/**
 * Renders the Pagination view component.
 */
export function Pagination({
  canPrevious,
  canNext,
  onPrevious,
  onNext,
}: Readonly<PaginationProps>) {
  return (
    <S.PaginationContainer>
      <S.PaginationButton
        type="button"
        $disabled={!canPrevious}
        onClick={onPrevious}
      >
        ← Anterior
      </S.PaginationButton>
      <S.PaginationButton
        type="button"
        $disabled={!canNext}
        onClick={onNext}
      >
        Próximo →
      </S.PaginationButton>
    </S.PaginationContainer>
  );
}
