
import { useContext } from 'react';
import AppCtx from '../contexts/ctxGlobal';
import BtnMenu from './btnMenu';
import { StyNavWrapper, StyNavButton } from './styles';
import SearchByFreela from './searchByFreela';
import LinksNav from './links';


const Nav = () => {

  const { isOpenMenu } = useContext(AppCtx);

  return (
  <>
    <BtnMenu />
    <StyNavWrapper className={isOpenMenu ? '' : 'none'}>
      <SearchByFreela />
      <LinksNav />
      <StyNavButton>PUBLIQUE UM PROJETO</StyNavButton>
    </StyNavWrapper>
  </>
);

}

export default Nav;