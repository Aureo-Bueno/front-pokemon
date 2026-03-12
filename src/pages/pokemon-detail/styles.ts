import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 1000px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
`;

export const Card = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.light};
  padding: ${({ theme }) => theme.spacing.xlarge};
`;

export const Header = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xlarge};
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

export const Sprite = styled.img`
  width: 120px;
  height: 120px;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
`;

export const Row = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin: ${({ theme }) => `${theme.spacing.medium} 0 ${theme.spacing.xlarge}`};
`;

export const Subtitle = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.xlarge} 0 ${theme.spacing.medium}`};
`;

export const MovesList = styled.ul`
  list-style: none;
`;

export const MoveItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.medium} 0;
`;

export const MoveName = styled.h3`
  text-transform: capitalize;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Feedback = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ErrorText = styled(Feedback)`
  color: ${({ theme }) => theme.colors.secondary};
`;
