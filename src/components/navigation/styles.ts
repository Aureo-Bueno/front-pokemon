/**
 * @file src/components/navigation/styles.ts
 * Styled-components definitions for a reusable UI component.
 */

import styled from 'styled-components';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';

/**
 * Styled component: Nav.
 */
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  width: min(1200px, calc(100% - 32px));
  margin: ${({ theme }) => `${theme.spacing.medium} auto 0`};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  box-shadow: ${({ theme }) => theme.shadows.light};

  @media (max-width: 768px) {
    width: min(100%, calc(100% - 24px));
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

/**
 * Styled component: NavBrand.
 */
export const NavBrand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

/**
 * Styled component: NavMark.
 */
export const NavMark = styled.span`
  width: 30px;
  height: 30px;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: none;

  span {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.92);
    background: #ffffff;
  }
`;

/**
 * Styled component: NavLinks.
 */
export const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.small};

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

/**
 * Styled component: NavLink.
 */
export const NavLink = styled(RouterNavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  border: 1px solid transparent;
  background: transparent;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: rgba(255, 255, 255, 0.04);
    border-color: ${({ theme }) => theme.colors.border};
    transform: translateY(-1px);
  }

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    border-color: transparent;
    box-shadow: none;
  }

  &:focus-visible {
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
