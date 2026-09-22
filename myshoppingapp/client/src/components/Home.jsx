
import Saman from './item'

const Home = () => {
  const itemData = [
    { id: 1, title: 'Wireless Headphones', price: 1499 },
    { id: 2, title: 'Smart Watch', price: 2299 },
    { id: 3, title: 'Travel Backpack', price: 1199 },
    { id: 4, title: 'Desk Lamp', price: 899 }
  ]

  return (
    <main className="catalog-section">

      <div className="product-grid">
        {itemData.map((item) => (
          <Saman
            key={item.id}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </main>
  )
}

export default Home