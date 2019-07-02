import styled from "styled-components";

export const WindowWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 640px) {
    padding: 20px 24px;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const MainWindowTemplate = styled.div`
display: flex !important;
flex-direction:column;
flex-wrap: no-wrap
    width:100%;
    @media (min-width: 960px) {
        width: 648px;
    }
`;
export const SideWindowTemplate = styled.div`
  display: none;
  flex: 0 0 312px;
  width: 312px;
  @media (min-width: 960px) {
    display: flex !important;
    flex-direction: column;
    flex-wrap: no-wrap;
  }
`;

export const Window = styled.div`
  background-color: darkgrey;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  height: ${props => props.theme.height ? props.theme.height : '200px'};
`;