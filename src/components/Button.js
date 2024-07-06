import styled, {css} from 'styled-components'

//Button component
export const Button = styled.button`
  background: ${(props) => (props.$primary ? 'blue' : 'gray')};
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;
 
   

`