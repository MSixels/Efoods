import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.div`
  display: block;
  background-color: ${Cores.bege};
  align-items: center;

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 64px;
  }
`

export const RedesSociais = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 96px;
}
`

export const RodaPe = styled.p`
  position: relative;
  font-size: 10px;
  text-align: center;
  color: ${Cores.rosa};
  margin-top: 160px;
  padding-bottom: 24px;
`
