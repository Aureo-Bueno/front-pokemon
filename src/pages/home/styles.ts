import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxlarge} ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 200px);
`;

export const HomeTitle = styled.h1`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.text};
`;

export const HomeDescription = styled.p`
  font-size: 20px;
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const HomeButton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.large} ${theme.spacing.xlarge}`};
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
