import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  rosa: '#E66767',
  bege: '#FFEBD9',
  branco: '#ffffff',
  begeClaro: '#FFF8F2',
  preto: '#000'
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
