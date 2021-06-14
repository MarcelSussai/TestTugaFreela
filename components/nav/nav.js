
// LIBS ___________________________________________________________
import { useContext } from 'react';
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

// CONTEXTO _______________________________________________________
import AppCtx from '../contexts/ctxGlobal';
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

// ESTILOS ________________________________________________________
import { 
  StyNavWrapper,
  StyNavButton,
  StyNavContainer,
  StyNavLinksBtnContainer,
} from './styles';
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

// COMPONENTES ____________________________________________________
import BtnMenu from './btnMenu';
import SearchByFreela from './searchByFreela';
import LinksNav from './links';
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


const Nav = () => {

  const { isOpenMenu } = useContext(AppCtx);

  return (
  <>
    <BtnMenu />
    <StyNavWrapper className={isOpenMenu ? '' : 'none'}>
      <StyNavContainer>
        <SearchByFreela />
        <StyNavLinksBtnContainer>
          <LinksNav />
          <StyNavButton>PUBLIQUE UM PROJETO</StyNavButton>
        </StyNavLinksBtnContainer>
      </StyNavContainer>
    </StyNavWrapper>
  </>
);

}

export default Nav;