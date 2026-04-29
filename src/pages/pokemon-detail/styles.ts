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
  display: grid;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: BackLink.
 */
export const BackLink = styled(Link)`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.02);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  transition: transform 180ms ease, background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.04);
  }
`;

/**
 * Styled component: Card.
 */
export const Card = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
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
  padding-bottom: ${({ theme }) => theme.spacing.large};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

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
  width: 140px;
  height: 140px;
  filter: drop-shadow(0 18px 35px rgba(2, 8, 23, 0.35));

  @media (max-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

/**
 * Styled component: Title.
 */
export const Title = styled.h1`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: clamp(30px, 4vw, 42px);
  letter-spacing: -0.03em;
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
  font-size: 16px;
  line-height: 1.7;
`;

/**
 * Styled component: Subtitle.
 */
export const Subtitle = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.xlarge} 0 ${theme.spacing.medium}`};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
`;

/**
 * Styled component: MovesList.
 */
export const MovesList = styled.ul`
  list-style: none;
  display: grid;
  gap: ${({ theme }) => theme.spacing.medium};
`;

/**
 * Styled component: MoveItem.
 */
export const MoveItem = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.large};
  background: rgba(255, 255, 255, 0.02);
  overflow-wrap: anywhere;
`;

/**
 * Styled component: MoveName.
 */
export const MoveName = styled.h3`
  text-transform: capitalize;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: 18px;
`;

/**
 * Styled component: Feedback.
 */
export const Feedback = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.medium} 0;
`;

/**
 * Styled component: ErrorText.
 */
export const ErrorText = styled(Feedback)`
  color: ${({ theme }) => theme.colors.secondary};
`;
