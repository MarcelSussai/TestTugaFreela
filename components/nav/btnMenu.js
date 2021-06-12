import { useContext, useState } from "react";
import AppCtx from "../contexts/ctxGlobal";
import { StyBtnMenuPiece, StyBtnMenuWrapper } from "./styles";


const BtnMenu = () => {

  const { isOpenMenu, setIsOpenMenu } = useContext(AppCtx);

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
    setIsOpenMenu(!isOpenMenu)
  }

  return (
  <>
    <StyBtnMenuWrapper className={isOpen ? 'isActive' : ''} onClick={handleOpenMenu}>
      <StyBtnMenuPiece className="hoverStyledPieceBtnMenu"></StyBtnMenuPiece>
    </StyBtnMenuWrapper>
  </>
);

}

export default BtnMenu;