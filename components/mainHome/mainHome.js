import { 
  StyMainButtonGeneric,
  StyMainButtonGenericContainer, 
  StyMainCADiv, 
  StyMainCAH1, 
  StyMainCallAction1, 
  StyMainHomeContainer 
} from "./styles";

const MainHome = () => {
  return (
  <>
    <StyMainHomeContainer>
      <StyMainCallAction1>
        <StyMainCADiv>
          <StyMainCAH1>
            Contrate freelancers <span>especializados para qualquer</span> trabalho online.
          </StyMainCAH1>
          <StyMainButtonGenericContainer>
            <StyMainButtonGeneric primary>QUERO CONTRATAR</StyMainButtonGeneric>
            <StyMainButtonGeneric>TRABALHE COMO FREELA</StyMainButtonGeneric>
          </StyMainButtonGenericContainer>
        </StyMainCADiv>
      </StyMainCallAction1>
    </StyMainHomeContainer>
  </>
);

}

export default MainHome;