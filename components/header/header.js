
import { useContext, useEffect } from "react";
import AppCtx from "../contexts/ctxGlobal";
import { HeaderSty, ImgSty } from "./styles";


const Header = () => {

  const { testeCtx, setTesteCtx } = useContext(AppCtx)

  useEffect(() => {
    setTesteCtx('funcionou')
    console.log(testeCtx)
  }, [testeCtx])


  return (
  <>
    <HeaderSty className=".teste">
      <ImgSty src="/logoTugaFreela.png" />
    </HeaderSty>
  </>
);

}

export default Header;