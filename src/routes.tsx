import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Products'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
