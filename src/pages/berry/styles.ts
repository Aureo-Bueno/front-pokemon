import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

export const Form = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 220px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Card = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.light};
  padding: ${({ theme }) => theme.spacing.xlarge};
`;

export const CardTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text};
`;

export const Row = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Subtitle = styled.h3`
  margin: ${({ theme }) => `${theme.spacing.xlarge} 0 ${theme.spacing.medium}`};
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  padding: ${({ theme }) => theme.spacing.small} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Feedback = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ErrorText = styled(Feedback)`
  color: ${({ theme }) => theme.colors.secondary};
`;
