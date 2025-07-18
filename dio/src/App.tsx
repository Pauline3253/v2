import './App.css';
import ProductList from './components/ProductList';
import { useState } from 'react';

type Product = {
  id: number;
  title: string;
  imgURL: string;
  description: string;
  price: number;
  quantity: number;
};

function App() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Strawberry Soju Cocktail",
      imgURL: "https://www.themixer.com/en-us/wp-content/uploads/sites/2/2023/06/556.-Strawberry-Soju-Cocktail_MidjourneyAI_GPC-1024x512.jpg.webp",
      description: "Strawberry-Soju-Cocktail",
      price: 85,
      quantity: 0
    },
    {
      id: 2,
      title: "Strawberry milk",
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mK_Pds9OS_x47tfJR097vaGM3zez46hUVzieDSJ9qvv7uN1bPVKLOKi08WE5FqiGel0&usqp=CAU",
      description: "strawberry-milk",
      price: 165,
      quantity: 0
    },
    {
      id: 3,
      title: "Bibimbap",
      imgURL: "https://www.recipetineats.com/tachyon/2019/05/Bibimbap_3.jpg",
      description: "Bibimbap",
      price: 75,
      quantity: 0
    },
    {
      id: 4,
      title: "Tteokbokki",
      imgURL: "https://assets.bonappetit.com/photos/5d38cbae9b6cf80008d71609/1:1/w_2560%2Cc_limit/0719-tteokbaki-rice-cakes-LEDE-New.jpg",
      description: "tteokbaki rice cakes",
      price: 165,
      quantity: 0
    }
  ]);

  const handleIncrement = (id: number) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleDecrement = (id: number) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleAddToCart = () => {
    const selected = products.filter(p => p.quantity > 0);

    if (selected.length === 0) {
      alert("No items selected.");
      return;
    }

    const message = `🛒 Added to cart:\n${selected
      .map(p => `${p.title} x${p.quantity} = ₱${(p.quantity * p.price).toFixed(2)}`)
      .join('\n')}\n\n🧾 Total: ₱${selected
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2)}`;

    alert(message);
  };

  return (
    <div>
      <div className="add-to-cart-container">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart 🛒
        </button>
      </div>

      <div className="container">
        {products.map(product => (
          <ProductList
            key={product.id}
            title={product.title}
            imgURL={product.imgURL}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            onIncrement={() => handleIncrement(product.id)}
            onDecrement={() => handleDecrement(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
