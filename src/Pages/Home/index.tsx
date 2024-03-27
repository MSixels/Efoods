import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import { useGetTiposCardapioQuery } from '../../Services/api'

const Home = () => {
  const { data: tiposCardapio, isLoading: isLoadingTipos } =
    useGetTiposCardapioQuery()

  if (tiposCardapio) {
    return (
      <>
        <Header />
        <ProductList cardapios={tiposCardapio} background="branco" />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
