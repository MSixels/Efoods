import styled from 'styled-components'
import { Props } from '.'
import { Colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'cardapios'>>`
  background-color: ${Colors.lightBeige};
  ${Card} {
    background-color: ${(props) =>
      props.background === 'rosa' ? Colors.pink : Colors.white};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  padding-top: 24px;

  li {
    margin-bottom: 48px;
  }
`
