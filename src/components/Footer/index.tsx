import footer from '../../assets/images/footer.png'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import { ContainerImg, ImageFooter, RedesSociais, RodaPe } from './styles'

const Footer = () => {
  return (
    <div>
      <ImageFooter style={{ backgroundImage: `url(${footer})` }}>
        <div className="container">
          <img src={logo} alt="Logo" />
        </div>
        <ContainerImg>
          <RedesSociais>
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </RedesSociais>
        </ContainerImg>
        <RodaPe>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </RodaPe>
      </ImageFooter>
    </div>
  )
}

export default Footer
