/**
 * @file src/pages/pokemon-detail/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * Styled component: Container.
 */
export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: BackLink.
 */
export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
`;

/**
 * Styled component: Card.
 */
export const Card = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.light};
  padding: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

/**
 * Styled component: Header.
 */
export const Header = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xlarge};
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: Sprite.
 */
export const Sprite = styled.img`
  width: 120px;
  height: 120px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

/**
 * Styled component: Title.
 */
export const Title = styled.h1`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: clamp(28px, 4vw, 36px);
`;

/**
 * Styled component: Row.
 */
export const Row = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;

/**
 * Styled component: Description.
 */
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin: ${({ theme }) => `${theme.spacing.medium} 0 ${theme.spacing.xlarge}`};
`;

/**
 * Styled component: Subtitle.
 */
export const Subtitle = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.xlarge} 0 ${theme.spacing.medium}`};
`;

/**
 * Styled component: MovesList.
 */
export const MovesList = styled.ul`
  list-style: none;
`;

/**
 * Styled component: MoveItem.
 */
export const MoveItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.medium} 0;
  overflow-wrap: anywhere;
`;

/**
 * Styled component: MoveName.
 */
export const MoveName = styled.h3`
  text-transform: capitalize;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

/**
 * Styled component: Feedback.
 */
export const Feedback = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

/**
 * Styled component: ErrorText.
 */
export const ErrorText = styled(Feedback)`
  color: ${({ theme }) => theme.colors.secondary};
`;
