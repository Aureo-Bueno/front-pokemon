import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xlarge};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
`;
