import { useParams } from 'react-router-dom'

import { useGetCardapioQuery } from '../../Services/api'

import Hero from '../../components/Hero'
import Gallery from '../../components/Gallery'

type GalleryParams = {
  id: string
}

const Categories = () => {
  const { id } = useParams() as GalleryParams
  const { data: restaurant } = useGetCardapioQuery(id)

  if (restaurant) {
    return (
      <>
        <Hero />
        <Gallery pratos={restaurant.cardapio} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
