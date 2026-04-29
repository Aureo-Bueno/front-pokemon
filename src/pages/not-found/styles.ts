/**
 * @file src/pages/not-found/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 55dvh;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
`;

export const Card = styled.section`
  width: min(100%, 720px);
  padding: ${({ theme }) => theme.spacing.xxlarge};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xlarge};
  }
`;

export const Code = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: clamp(56px, 12vw, 96px);
  line-height: 0.9;
  letter-spacing: -0.08em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: clamp(18px, 3vw, 24px);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

export const Description = styled.p`
  max-width: 52ch;
  margin: 0 auto ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
`;

export const Action = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  box-shadow: none;
  transition: transform 180ms ease, opacity 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;
