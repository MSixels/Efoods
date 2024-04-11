import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'
import { Link, useParams } from 'react-router-dom'

import { Apresentacao, CartButton, Fundo, Titulo, Titulo2 } from './styles'

import banner from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

import { useGetHeroQuery } from '../../Services/api'
import { open } from '../../Store/reducers/cart'

type HeroParams = {
  id: string
}

const Hero = () => {
  const { id } = useParams() as HeroParams
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { data: hero } = useGetHeroQuery(id)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <Fundo style={{ backgroundImage: `url(${banner})` }}>
        <img src={logo} alt="logo" />
        <div className="container">
          <Link to="/">Restaurantes</Link>
          <CartButton role="button" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </div>
      </Fundo>
      <Apresentacao style={{ backgroundImage: `url(${hero?.capa})` }}>
        <div className="container">
          <Titulo>{hero?.tipo}</Titulo>
          <Titulo2>{hero?.titulo}</Titulo2>
        </div>
      </Apresentacao>
    </>
  )
}

export default Hero
