import { useContext, useEffect } from "react";

import AppCtx from "../contexts/ctxGlobal";
import { HeaderSty, ImgSty } from "./styles";
import Nav from '../nav/nav';

const Header = () => {

  return (
  <>
    <HeaderSty className=".teste">
      <ImgSty src="/logoTugaFreela.png" />
      <Nav />
    </HeaderSty>
  </>
);

}

export default Header;