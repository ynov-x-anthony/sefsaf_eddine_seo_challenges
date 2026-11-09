import { Link } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

export default function Home() {
  useDocumentMeta({
    title: 'Boutique vélo et accessoires | CycloShop',
    description: 'Découvrez notre catalogue de vélos électriques, VTT et accessoires au meilleur prix.',
  })

  return (
    <div className="page">
      <h1>Notre catalogue</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            <Link to={`/produits/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}