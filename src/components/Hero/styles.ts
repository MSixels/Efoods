import styled from 'styled-components'
import { Imagem } from '../../components/Header/styles'
import { Cores } from '../../styles'

export const Fundo = styled(Imagem)`
  height: 200px;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;

  img {
    max-width: 125px;
    height: 58px;
    position: absolute;
    display: flex;
  }

  .container {
    top: 0;
    justify-content: space-between;
    color: ${Cores.rosa};

    a {
      color: ${Cores.rosa};
    }
  }
`

export const Apresentacao = styled(Imagem)`
  height: 300px;
  margin-bottom: 56px;

  .container {
    display: block;
  }
`

export const Titulo = styled.h3`
  position: absolute;
  top: 0px;
  font-size: 32px;
  font-weight: 100;
  color: ${Cores.branco};
`
export const Titulo2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  top: 180px;
  color: ${Cores.branco};
  position: absolute;
`