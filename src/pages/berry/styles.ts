/**
 * @file src/pages/berry/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

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
 * Styled component: Title.
 */
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(30px, 4vw, 44px);
  letter-spacing: -0.03em;
`;

/**
 * Styled component: Description.
 */
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
  max-width: 60ch;
`;

/**
 * Styled component: Form.
 */
export const Form = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  align-items: stretch;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.light};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

/**
 * Styled component: Input.
 */
export const Input = styled.input`
  flex: 1;
  min-height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  color: ${({ theme }) => theme.colors.text};
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/**
 * Styled component: Button.
 */
export const Button = styled.button`
  min-height: 48px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  transition: transform 180ms ease, opacity 180ms ease;
  border: none;
  box-shadow: none;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: 768px) {
    width: 100%;
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
 * Styled component: CardTitle.
 */
export const CardTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
`;

/**
 * Styled component: Row.
 */
export const Row = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  overflow-wrap: anywhere;
  line-height: 1.6;
`;

/**
 * Styled component: Subtitle.
 */
export const Subtitle = styled.h3`
  margin: ${({ theme }) => `${theme.spacing.xlarge} 0 ${theme.spacing.medium}`};
  color: ${({ theme }) => theme.colors.text};
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
  padding: ${({ theme }) => `${theme.spacing.small} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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
