import { 
  StySearchImg,
  StySearchInput,
  StySearchButton,
  StySearchWrapper
} from "./styles";


const SearchByFreela = () => {
  return (
  <>
    <StySearchWrapper>
      <StySearchInput className='editPlaceHolder' placeholder="buscar por profissionais" type="text" />
      <StySearchButton>
        <StySearchImg src="/svg_search.svg" />
      </StySearchButton>
    </StySearchWrapper>
  </>
);

}

export default SearchByFreela;