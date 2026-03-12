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
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const HomeDetailsCard = styled.section`
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxlarge};
  padding: ${({ theme }) => theme.spacing.xlarge};
  text-align: left;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.light};
`;

export const HomeDetailsTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const HomeDetailsList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

export const HomeDetailsItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.small};
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

export const HomeButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  flex-wrap: wrap;
`;
