import { 
  StyMainButtonGeneric,
  StyMainButtonGenericContainer, 
  StyMainCADiv, 
  StyMainCAH1, 
  StyMainCAH2, 
  StyMainCallAction1, 
  StyMainCallAction2, 
  StyMainHomeContainer, 
  StyMainItem, 
  StyMainItemImg, 
  StyMainItemsContainer,
  StyMainItemTitle,
  StyMainText
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
      <StyMainCallAction2>
        <StyMainCAH2>Como Funciona?</StyMainCAH2>
        <StyMainItemsContainer>
          <StyMainItem>
            <StyMainItemImg src="/imgCA1.svg" />
            <StyMainItemTitle>Publique um projeto</StyMainItemTitle>
            <StyMainText>
              Conte-nos em poucas palavras o que você precisa. É grátis e sem compromisso!
            </StyMainText>
          </StyMainItem>
          <StyMainItem>
            <StyMainItemImg src="/imgCA2.svg" />
            <StyMainItemTitle>Selecione o profissional</StyMainItemTitle>
            <StyMainText>
              Receba propostas de excelentes freelancers. Escolha o melhor para o seu projeto.
            </StyMainText>
          </StyMainItem>
          <StyMainItem>
            <StyMainItemImg src="/imgCA3.svg" />
            <StyMainItemTitle>Faça o pagamento</StyMainItemTitle>
            <StyMainText>
              Você faz o pagamento com total garantia sobre o valor depositado e já começa a trabalhar :)
            </StyMainText>
          </StyMainItem>
          <StyMainItem>
            <StyMainItemImg src="/imgCA4.svg" />
            <StyMainItemTitle>Aceitar</StyMainItemTitle>
            <StyMainText>
              Receba o projeto concluído e libere o valor depositado ao freelancer.
            </StyMainText>
          </StyMainItem>
        </StyMainItemsContainer>
      </StyMainCallAction2>
    </StyMainHomeContainer>
  </>
);

}

export default MainHome;