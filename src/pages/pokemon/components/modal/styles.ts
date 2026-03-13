/**
 * @file src/pages/pokemon/components/modal/styles.ts
 * Styled-components definitions for a page or page subcomponent.
 */

import styled from "styled-components";

/**
 * Styled component: ModalOverlay.
 */
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
  padding: ${({ theme }) => theme.spacing.medium};
`;

/**
 * Styled component: ModalContent.
 */
export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxlarge};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  width: min(92vw, 720px);
  max-height: 90vh;
  overflow: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

/**
 * Styled component: ModalTitle.
 */
export const ModalTitle = styled.h2`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

/**
 * Styled component: ModalImage.
 */
export const ModalImage = styled.img`
  width: 200px;
  display: block;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 140px;
  }
`;

/**
 * Styled component: ModalInfoSection.
 */
export const ModalInfoSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xlarge};
`;

/**
 * Styled component: ModalInfoItem.
 */
export const ModalInfoItem = styled.p`
  margin: ${({ theme }) => theme.spacing.small} 0;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;

  strong {
    font-weight: 600;
  }
`;

/**
 * Styled component: ModalStatItem.
 */
export const ModalStatItem = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

/**
 * Styled component: ModalStatsTitle.
 */
export const ModalStatsTitle = styled(ModalInfoItem)`
  margin-top: ${({ theme }) => theme.spacing.large};
`;

/**
 * Styled component: CloseButton.
 */
export const CloseButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.medium};
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

/**
 * Styled component: RedirectButton.
 */
export const RedirectButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
