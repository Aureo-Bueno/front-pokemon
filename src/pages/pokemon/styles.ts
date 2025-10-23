import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
  color: ${({ theme }) => theme.colors.text};
`;

export const InfoText = styled.p`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.textLight};
`;
