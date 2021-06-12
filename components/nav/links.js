import { StyNavA, StyNavLink, StyNavLinkWrapper } from "./styles";

const LinksNav = () => {
  return (
  <>
    <StyNavLinkWrapper>
      <StyNavLink href="/comoFunciona">
        <StyNavA>Como Funciona</StyNavA>
      </StyNavLink>
      <StyNavLink href="/cadastrese">
        <StyNavA>Cadastre-se</StyNavA>
      </StyNavLink>
      <StyNavLink href="/cadastrese">
        <StyNavA>Entrar</StyNavA>
      </StyNavLink>
    </StyNavLinkWrapper>
  </>
);

}

export default LinksNav;