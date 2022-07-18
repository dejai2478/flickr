import styled, {keyframes} from "styled-components";

const HEADER_BACKGROUND = "#FFFFFF";
const SEARCH_INPUT_BACKGROUND = "#eaeaea";

export const FlickrResponsiveImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Grid = styled.div`
  overflow: auto;
  max-height: 90vh;
  grid-auto-rows: 300px;
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const SearchInput = styled.input`
  background-color: ${SEARCH_INPUT_BACKGROUND};
  height: 44px;
  min-width: 400px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  margin: 20px 0;
  &:focus: {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const HeaderContainer = styled.div`
  background-color: ${HEADER_BACKGROUND};
  box-shadow: 0 8px 15px -6px grey;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin: 0 auto;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
    padding: 10px 0;`

export const MetadataContainer = styled.div`
    color: grey;
    margin-left: 10px;
`
