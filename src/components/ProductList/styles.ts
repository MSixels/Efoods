import styled from 'styled-components'
import { Props } from '.'
import { Cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'cardapios'>>`
  padding-top: 80px;
  padding-bottom: 40px;

  background-color: ${Cores.begeClaro};
  ${Card} {
    background-color: ${(props) =>
      props.background === 'rosa' ? Cores.rosa : Cores.begeClaro};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
