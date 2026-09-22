

const Item = ({ title, price }) => {
  const iconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zc86eb8oIu4eOwyIRNcCoPuxNAWf-W1EHw9y5Ro0ew&s=10';
  const productIcons = {
    'Wireless Headphones': iconUrl,
    'Smart Watch': iconUrl,
    'Travel Backpack': iconUrl,
    'Desk Lamp': iconUrl
  }

  return (
    <div className="product-card">
      <div className="product-icon">
        <img src={productIcons[title] || iconUrl} alt={`${title} icon`} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
      </div>
      <h3>{title}</h3>
      <div className="product-price">₹{price}</div>
      <button type="button">ADD TO CART</button>
    </div>
  )
}

export default Item