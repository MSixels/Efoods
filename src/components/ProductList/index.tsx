import Product from '../Product'
import { Container, List } from './styles'
import Menu from '../../models/Menu'

export type Props = {
  background: 'branco' | 'rosa'
  cardapios: Menu[]
}

const ProductList = ({ background, cardapios }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {cardapios.map((cardapio) => (
          <Product
            key={cardapio.id}
            title={cardapio.title}
            tag={cardapio.tag}
            image={cardapio.image}
            description={cardapio.description}
            nota={cardapio.nota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
