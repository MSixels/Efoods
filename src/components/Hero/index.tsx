import { Link, useParams } from 'react-router-dom'
import banner from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'
import { Apresentacao, Fundo, Titulo, Titulo2 } from './styles'
import { useGetHeroQuery } from '../../Services/api'

type HeroParams = {
  id: string
}

const Hero = () => {
  const { id } = useParams() as HeroParams
  const { data: hero } = useGetHeroQuery(id)

  return (
    <>
      <Fundo style={{ backgroundImage: `url(${banner})` }}>
        <img src={logo} alt="logo" />
        <div className="container">
          <Link to="/">Restaurantes</Link>
          <p>0 produto(s) no carrinho</p>
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
