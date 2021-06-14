import styled from 'styled-components'
import { fontF, trans01 } from '../StylesPatterns'

export const StyMainHomeContainer = styled.main`
  width: 100%;
  transform: translateY(63.8px);
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
    padding: 32px;
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
  @media (min-width: 1024px) {
    font-size: 40px;
  }
  @media (min-width: 1400px) {
    font-size: 48px;
  }
  @media (min-width: 1640px) {
    font-size: 56px;
  }
  @media (min-width: 2000px) {
    font-size: 64px;
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
    padding: 12px;
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

export const StyMainCallAction2 = styled.section`
  display: flex;
  flex-direction: column;
`

export const StyMainCAH2 = styled.h2`
  width: 100%;
  ${fontF}
  font-weight: 400;
  text-align: center;
  margin-top: 32px;
  font-size: 32px;
`

export const StyMainItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 56px;

  @media (min-width: 425px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1440px) {
    padding: 40px;
  }

`

export const StyMainItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const StyMainItemImg = styled.img`
  width: 56%;
  
  @media (min-width: 425px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 160px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    width: unset;
    height: 200px;
  }
`

export const StyMainItemTitle = styled.h3`
  ${fontF}
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  text-align: center;
`

export const StyMainText = styled.p`
  ${fontF}
  font-size: 14px;
  text-align: center;
`

export const StyMainCallAction3 = styled.section``

export const StyMainCA3Container = styled.div``

