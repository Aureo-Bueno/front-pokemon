/**
 * @file src/pages/home/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xlarge};
  padding-top: 0;

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.large};
  }
`;

export const HomeHero = styled.section`
  padding: ${({ theme }) => theme.spacing.xxlarge};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.light};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.large};
  }
`;

export const HomeEyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.02);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const HomeTitle = styled.h1`
  max-width: 12ch;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  font-size: clamp(36px, 6vw, 60px);
  line-height: 1;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.text};
`;

export const HomeDescription = styled.p`
  max-width: 60ch;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const HomeButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeButton = styled(Link)<{ $variant?: "primary" | "secondary" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.white : theme.colors.text};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  border: 1px solid ${({ theme, $variant }) =>
    $variant === "primary" ? "transparent" : theme.colors.border};
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease;
  text-align: center;

  background: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.primary : "rgba(255, 255, 255, 0.02)"};
  box-shadow: none;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme, $variant }) =>
      $variant === "primary" ? "transparent" : theme.colors.borderStrong};
    background: ${({ $variant }) =>
      $variant === "primary"
        ? "#b91c1c"
        : "rgba(255, 255, 255, 0.04)"};
  }
`;

export const HomeStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeStat = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: grid;
  gap: 6px;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
  }

  span {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const HomeDetailsCard = styled.section`
  padding: ${({ theme }) => theme.spacing.xlarge};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.light};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

export const HomeDetailsTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
`;

export const HomeDetailsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeDetailsItem = styled.li`
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.65;
`;
