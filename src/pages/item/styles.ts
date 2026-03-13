/**
 * @file src/pages/item/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

/**
 * Styled component: Container.
 */
export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: Title.
 */
export const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(28px, 4vw, 36px);
`;

/**
 * Styled component: Description.
 */
export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

/**
 * Styled component: Form.
 */
export const Form = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

/**
 * Styled component: Input.
 */
export const Input = styled.input`
  width: 220px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/**
 * Styled component: Button.
 */
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
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
 * Styled component: CardHeader.
 */
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xlarge};
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: CardTitle.
 */
export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`;

/**
 * Styled component: Sprite.
 */
export const Sprite = styled.img`
  width: 64px;
  height: 64px;
  image-rendering: pixelated;
`;

/**
 * Styled component: Row.
 */
export const Row = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  overflow-wrap: anywhere;
`;

/**
 * Styled component: Subtitle.
 */
export const Subtitle = styled.h3`
  margin: ${({ theme }) => `${theme.spacing.xlarge} 0 ${theme.spacing.medium}`};
`;

/**
 * Styled component: List.
 */
export const List = styled.ul`
  list-style: none;
`;

/**
 * Styled component: ListItem.
 */
export const ListItem = styled.li`
  padding: ${({ theme }) => theme.spacing.small} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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
