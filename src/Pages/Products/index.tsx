import banner from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'
import macarrao from '../../assets/images/fundo-macarrao.png'
import { Apresentacao, Fundo, Titulo, Titulo2 } from './styles'
import MenuList from '../../components/MenuList'
import { Link } from 'react-router-dom'

const Product = () => (
  <>
    <Fundo style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="logo" />
        <p>0 produto(s) no carrinho</p>
      </div>
    </Fundo>
    <Apresentacao style={{ backgroundImage: `url(${macarrao})` }}>
      <div className="container">
        <Titulo>Italiana</Titulo>
        <Titulo2>La Dolce Vita Trattoria</Titulo2>
      </div>
    </Apresentacao>
    <MenuList />
  </>
)
export default Product
