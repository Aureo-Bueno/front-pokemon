import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxlarge};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  max-width: 500px;
  max-height: 80vh;
  overflow: auto;
`;

export const ModalTitle = styled.h2`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.text};
`;

export const ModalImage = styled.img`
  width: 200px;
  display: block;
  margin: 0 auto;
`;

export const ModalInfoSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xlarge};
`;

export const ModalInfoItem = styled.p`
  margin: ${({ theme }) => theme.spacing.small} 0;
  color: ${({ theme }) => theme.colors.text};

  strong {
    font-weight: 600;
  }
`;

export const ModalStatItem = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

export const CloseButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
