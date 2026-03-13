/**
 * @file src/components/navigation/styles.ts
 * Styled-components definitions for a reusable UI component.
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Styled component: Nav.
 */
export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxlarge};
  align-items: center;

  @media (max-width: 1024px) {
    gap: ${({ theme }) => theme.spacing.xlarge};
    padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: NavBrand.
 */
export const NavBrand = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

/**
 * Styled component: NavLinks.
 */
export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.medium};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

/**
 * Styled component: NavLink.
 */
export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  }
`;
