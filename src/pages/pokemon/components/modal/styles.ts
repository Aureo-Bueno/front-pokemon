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
  background: rgba(2, 6, 23, 0.74);
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
  background: ${({ theme }) => theme.colors.surfaceStrong};
  padding: ${({ theme }) => theme.spacing.xxlarge};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: min(92vw, 720px);
  max-height: 90vh;
  overflow: auto;
  box-shadow: ${({ theme }) => theme.shadows.medium};

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
  font-size: clamp(26px, 4vw, 36px);

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

/**
 * Styled component: ModalImage.
 */
export const ModalImage = styled.img`
  width: min(240px, 70vw);
  display: block;
  margin: 0 auto;
  filter: drop-shadow(0 10px 20px rgba(15, 23, 42, 0.18));

  @media (max-width: 768px) {
    width: min(180px, 60vw);
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
  margin-top: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
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
  min-height: 44px;
  background: rgba(255, 255, 255, 0.02);
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  transition: transform 180ms ease, background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.04);
  }
`;

/**
 * Styled component: RedirectButton.
 */
export const RedirectButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xlarge}`};
  width: 100%;
  min-height: 44px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  border: none;
  transition: transform 180ms ease, opacity 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;
