import styled from 'styled-components'
import Link from 'next/link'
import { fontF, trans01 } from '../StylesPatterns'


// StySearch ______________________________________________________
export const StySearchInput = styled.input`
  width: 88%;
  height: 40px;
  padding: 8px;
  border: none;
  ${fontF}
  ${trans01}
  .editPlaceHolder:placeholder {
    color: ${ ({ theme }) => theme.colors.primary };
  }
  @media (min-width: 480px) {
    width: 320px;
  }
  @media (min-width: 1024px) {
    width: 248px;
    height: 32px;
  }
`

export const StySearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12%;
  height: 40px;
  margin-left: -4px;
  padding: 8px;
  background: ${ ({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  ${trans01}
  @media (min-width: 480px) {
    width: 40px;
  }
  @media (min-width: 1024px) {
    height: 32px;
  }
`

const sizeStySearchImg = '16px'
export const StySearchImg = styled.img`
  width: ${sizeStySearchImg};
  height: ${sizeStySearchImg};
`

export const StySearchWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: fit-content;
    margin: 0 0 0 8px;
  }

`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



// StyNav _________________________________________________________
export const StyNavWrapper = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 62px;
  left: 0;
  width: 80vw;
  height: fit-content;
  padding: 16px;
  background: ${ ({ theme }) => theme.colors.primary};
  transform-origin: 0 0;
  ${'' /* transform: scaleY(0); */}
  transform: translate3d(0, 0, 0);
  z-index: -3;
  ${'' /* opacity: 1; */}
  ${trans01}
  box-shadow: 8px 12px 16px ${ ({ theme }) => theme.colors.blackShadow };
  &.none {
    transform: translate3d(-120%, 0, 0);
    ${'' /* opacity: 0; */}
    ${'' /* transform: scaleY(1); */}
    @media (min-width: 1024px) {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @media (min-width: 1024px) {
    position: relative;
    justify-content: center;
    align-items: center;
    box-shadow: unset;
    width: 100%;
    flex-direction: row;
    padding: 0;
    margin: 0;
    top: 0;
    background: transparent;
  }

`

export const StyNavA = styled.a`
  ${fontF}
  ${trans01}
  cursor: pointer;
  margin-top: 16px;
  font-size: 14px;

  @media (min-width: 1024px) {
    margin: 0;
  }

`

export const StyNavButton = styled.button`
  ${fontF}
  margin: 32px;
  padding: 16px;
  background: ${ ({ theme }) => theme.colors.purple200 };
  color: ${ ({ theme }) => theme.colors.white };
  border-radius: 4px;
  border: none;
  font-weight: 400;
  cursor: pointer;
  width: 184px;
  ${trans01}

  &:hover {
    background: ${ ({ theme }) => theme.colors.purple400 };
  }

  @media (min-width: 1024px) {
    margin: 0;
    padding: 12px 0 12px 0;
    flex: 1;
  }
`

export const StyNavLink = styled(Link)`
  cursor: pointer;
`

export const StyNavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* width: 100%; */}
  padding: 0 24px 0 24px;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
  ${trans01}

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 32px;
    flex: 2;
    margin: 0;
    padding: 0 16px 0 16px;
    width: fit-content;
    justify-content: flex-end;
  }
  @media (min-width: 1200px) {
    flex: 3;
  }
  @media (min-width: 1600px) {
    flex: 5;
  }
  @media (min-width: 2000px) {
    flex: 7;
  }
  @media (min-width: 2400px) {
    flex: 9;
  }
`

export const StyNavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-left: 16px;
    justify-content: space-between;
  }

`

export const StyNavLinksBtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 24px;
    width: 100%;
  }
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



// StyBtn _________________________________________________________
const sizeBtnMenuWrapper = '40px'
export const StyBtnMenuWrapper = styled.div`
  width: ${sizeBtnMenuWrapper};
  height: ${sizeBtnMenuWrapper};
  ${'' /* background: ${ ({ theme }) => theme.colors.purple200 }; */}
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0;
  cursor: pointer;

  &:hover .hoverStyledPieceBtnMenu,
  &:hover .hoverStyledPieceBtnMenu:before,
  &:hover .hoverStyledPieceBtnMenu:after {
    background: ${ ({ theme }) => theme.colors.purple200 };
  }
  &:before {
    content: '';
    opacity: 0;
    width: 0;
    height: 0;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    background: transparent;
    transform: translate3d(-50%, -50%, 0);
    ${trans01}
  }
  &.isActive:before {
    opacity: 1;
    width: ${sizeBtnMenuWrapper};
    height: ${sizeBtnMenuWrapper};
    background: ${ ({ theme }) => theme.colors.white };
  }
  &.isActive .hoverStyledPieceBtnMenu {
    background: transparent;
    &:before {
      background: ${ ({ theme }) => theme.colors.purple700 };
      top: 0;
      transform: rotate(225deg);
    }
    &:after {
      background: ${ ({ theme }) => theme.colors.purple700 };
      top: 0;
      transform: rotate(-225deg);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

export const StyBtnMenuPiece = styled.div`
  display: block;
  position: relative;
  &:before, &:after {
    content: '';
    position: absolute;
    left: 0;
  }
  &:before {
    top: -6px;
  }
  &:after {
    bottom: -6px;
  }
  &, &:before, &:after {
    width: 100%;
    height: 3px;
    background: ${ ({ theme }) => theme.colors.purple400 };
    ${trans01}
  }
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


