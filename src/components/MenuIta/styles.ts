import styled from 'styled-components'
import { Button, Card, Descricao, Title } from '../Product/styles'
import { Cores } from '../../styles'

export const Container = styled.div`
  max-width: 320px;
  background-color: ${Cores.rosa};
  margin-bottom: 32px;
`

export const CardRosa = styled(Card)`
  padding: 8px;
  color: ${Cores.bege};
  background-color: ${Cores.rosa};
  margin: 0 auto;

  img {
    max-width: 300px;
  }
`

export const ButtonAdicionar = styled(Button)`
  color: ${Cores.rosa};
  background-color: ${Cores.bege};
  width: 100%;
  font-weight: bold;
`

export const Titulo = styled(Title)`
  font-size: 16px;
  margin-top: 8px;
`

export const Description = styled(Descricao)`
  font-size: 14px;
  margin-top: 8px;
`
