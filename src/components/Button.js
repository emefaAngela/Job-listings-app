import styled, {css} from 'styled-components'

//Button component
export const Button = styled.button`
  background: ${(props) => (props.$new ? 'hsl(180, 29%, 50%)' : 'hsl(180, 14%, 20%)')};
  border-radius: 8em;
  border: none;
  color: white;
  margin: 0 0em;
  padding: 0.25em 1em;
 
   

`