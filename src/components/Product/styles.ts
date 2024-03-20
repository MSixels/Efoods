import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  background-color: ${Cores.bege};
  color: ${Cores.rosa};
  position: relative;
  margin-bottom: 48px;
  line-height: 22px;

  img {
    width: 100%;
  }
`

export const CardInfos = styled.div`
  padding: 0 8px 8px;
  border-right: solid 1px;
  border-left: solid 1px;
  border-bottom: solid 1px;
  border-color: ${Cores.rosa};
`

export const Title = styled.h2`
  font-size: 21px;
  font-weight: bold;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  width: 82px;
  cursor: pointer;
  background-color: ${Cores.rosa};
  border: none;
  padding: 6px;

  a {
    color: ${Cores.branco};
  }
`

export const TagContainer = styled.div`
  background-color: ${Cores.rosa};
  color: ${Cores.branco};
  font-size: 12px;
  font-weight: bold;
  padding: 8px;
  display: inline-block;
  margin-left: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
