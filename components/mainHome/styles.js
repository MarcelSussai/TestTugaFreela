import styled from 'styled-components'
import { fontF, trans01 } from '../StylesPatterns'

export const StyMainHomeContainer = styled.main`
  width: 100%;
  transform: translateY(64px);
`

export const StyMainCallAction1 = styled.section`
  background-image: url('/img_01.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 64% 50%;
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const StyMainCADiv = styled.section`
  background: ${ ({ theme }) => theme.colors.grayOpacity };
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  @media (min-width: 768px) {
    width: 56%;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 48%;
  }
`

export const StyMainCAH1 = styled.h1`
  ${fontF}
  color: ${ ({ theme }) => theme.colors.white };
  font-weight: 400;
  font-size: 24px;

  & span {
    font-weight: 700;
  }

  @media (min-width: 375px) {
  font-size: 28px;
  }
  @media (min-width: 425px) {
  font-size: 32px;
  }
  @media (min-width: 768px) {
  font-size: 36px;
  }
`

export const StyMainButtonGenericContainer = styled.div`
  display: flex;
  gap: 16px
`

export const StyMainButtonGeneric = styled.button`
  ${fontF}
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white };
  background: ${ 
    props => props.primary ? 
    props.theme.colors.purple200 : 
    props.theme.colors.primary 
  };
  ${trans01}
  cursor: pointer;

  &:hover {
    background: ${ 
    props => props.primary ? 
    props.theme.colors.purple400 : 
    props.theme.colors.gray 
  };}

  @media (min-width: 375px) {
    font-size: 11px;
    padding: 16px;
  }
  @media (min-width: 425px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
  
`