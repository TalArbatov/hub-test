import styled from 'styled-components';


const SubmitButton = styled.button`
  cursor:pointer;
  height:30px;
  border-radius:20px;
  background:white;
  color:${props => props.theme.submitButton.color};
  display:flex;
  justify-content:center;
  align-items:center;
  padding:4px 20px; 
  margin:10px;
  font-family:Gisha;
  border: 2px solid #1ECD97;
  transition:0.3s;
  &:hover {
    background: #1ECD97;
    color: white;

  }
`

export default SubmitButton