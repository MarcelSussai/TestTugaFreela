import styled from 'styled-components'

// Header Container _______________________________________________
export const HeaderSty = styled.header`
  position: fixed;
  top: 0;
  padding: 0 24px 0 8px;
  width: 100%;
  height: 64px;
  background: ${ ({ theme }) => theme.colors.primary };
  color: ${ ({ theme }) => theme.colors.white };
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media (min-width: 1024px) {
    padding: 0 24px 0 16px;
  }

`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

// Image logo _____________________________________________________
export const ImgSty = styled.img`
  width: 152px;
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

