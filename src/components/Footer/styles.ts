import styled from 'styled-components'
import { Imagem } from '../Header/styles'
import { Cores } from '../../styles'

export const ImageFooter = styled(Imagem)`
  height: 300px;
`

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RedesSociais = styled.div`
  max-width: 88px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 96px;
`

export const RodaPe = styled.p`
  position: relative;
  font-size: 10px;
  text-align: center;
  color: ${Cores.rosa};
  margin-top: 160px;
`
