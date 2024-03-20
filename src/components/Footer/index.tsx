import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import { Container, RedesSociais, RodaPe } from './styles'

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <img src={logo} alt="Logo" />
      </div>
      <RedesSociais>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </RedesSociais>
      <RodaPe>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </RodaPe>
    </Container>
  )
}

export default Footer
