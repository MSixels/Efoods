import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  pink: '#E66767',
  beige: '#FFEBD9',
  white: '#ffffff',
  lightBeige: '#FFF8F2',
  black: '#000'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
export default styled
