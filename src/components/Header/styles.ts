import styled from 'styled-components'
import { Colors } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 400px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 64px;
  }
`

export const Titulo = styled.h2`
  position: relative;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  top: 220px;
  color: ${Colors.pink};
`
