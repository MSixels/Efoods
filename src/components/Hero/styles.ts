import styled from 'styled-components'
import { Imagem } from '../../components/Header/styles'
import { Colors } from '../../styles'

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
    color: ${Colors.pink};

    a {
      color: ${Colors.pink};
    }
  }
`

export const Apresentacao = styled(Imagem)`
  height: 300px;
  margin-bottom: 56px;
  object-fit: cover;

  .container {
    display: block;
  }
`

export const Titulo = styled.h3`
  position: absolute;
  top: 0px;
  font-size: 32px;
  font-weight: 100;
  color: ${Colors.white};
`
export const Titulo2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  top: 180px;
  color: ${Colors.white};
  position: absolute;
`

export const CartButton = styled.span`
  cursor: pointer;
`
