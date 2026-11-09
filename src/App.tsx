import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produits/:slug" element={<Product />} />
    </Routes>
  )
}

export default App