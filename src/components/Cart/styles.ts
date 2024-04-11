import styled from 'styled-components'
import { Cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Cores.preto};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${Cores.rosa};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  span {
    color: ${Cores.branco};
  }
`

export const ContainerPrices = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.branco};
  margin-bottom: 24px;
`

export const Preco = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${Cores.rosa};
  margin-bottom: 24px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${Cores.rosa};
  padding: 8px 0;
  margin-bottom: 16px;
  position: relative;
  background-color: ${Cores.bege};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 0 8px 0 8px;
  }

  h3 {
    color: ${Cores.rosa};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${Cores.rosa};
    font-weight: bold;
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    background-color: transparent;
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
