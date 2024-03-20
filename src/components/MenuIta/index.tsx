import pizza from '../../assets/images/pizza.png'
import {
  ButtonAdicionar,
  CardRosa,
  Container,
  Description,
  Titulo
} from './styles'

const MenuIta = () => (
  <Container>
    <CardRosa>
      <img src={pizza} alt="Pizza" />
      <Titulo>Pizza Marguerita</Titulo>
      <Description>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Description>
      <ButtonAdicionar>Adicionar ao carrinho</ButtonAdicionar>
    </CardRosa>
  </Container>
)

export default MenuIta
