/**
 * @file src/pages/home/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Styled component: HomeContainer.
 */
export const HomeContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxlarge} ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 200px);

  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.xxlarge} ${({ theme }) => theme.spacing.large};
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: HomeTitle.
 */
export const HomeTitle = styled.h1`
  font-size: clamp(32px, 6vw, 48px);
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.text};
`;

/**
 * Styled component: HomeDescription.
 */
export const HomeDescription = styled.p`
  font-size: clamp(16px, 3vw, 20px);
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.textLight};
`;

/**
 * Styled component: HomeDetailsCard.
 */
export const HomeDetailsCard = styled.section`
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxlarge};
  padding: ${({ theme }) => theme.spacing.xlarge};
  text-align: left;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.light};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.large};
    text-align: left;
  }
`;

/**
 * Styled component: HomeDetailsTitle.
 */
export const HomeDetailsTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
`;

/**
 * Styled component: HomeDetailsList.
 */
export const HomeDetailsList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

/**
 * Styled component: HomeDetailsItem.
 */
export const HomeDetailsItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

/**
 * Styled component: HomeButton.
 */
export const HomeButton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.large} ${theme.spacing.xlarge}`};
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: background-color 0.2s;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

/**
 * Styled component: HomeButtons.
 */
export const HomeButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  max-width: 840px;
  margin: 0 auto;
`;
