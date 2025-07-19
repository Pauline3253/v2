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
      title: "Sushi sashimi",
      imgURL: "https://sushiaruonline.com/wp-content/uploads/2023/08/sushi-sashimi-platter.png",
      description: "sushi sashimi platter",
      price: 1550,
      quantity: 0
    },
    {
      id: 2,
      title: "Hanami dango",
      imgURL: "https://japanbite.com/cdn/shop/articles/1_1aa79b00-0e2b-4750-a40f-7c80c45e9a73.jpg?v=1716019143",
      description: "Dango",
      price: 165,
      quantity: 0
    },
    {
      id: 3,
      title: "Tokyo tea",
      imgURL: "https://i0.wp.com/www.inspiredfreshlife.com/wp-content/uploads/2023/03/tokyo-tea-4.jpg?fit=1200%2C1200&ssl=1",
      description: "tokyo tea",
      price: 70,
      quantity: 0
    },
    {
      id: 4,
      title: "Mocktail drink",
      imgURL: "https://mymocktailforest.com/wp-content/uploads/2023/01/butterfly-pea-flower-tea-mocktail-6.jpg",
      description: "butterfly pea flower tea mocktail",
      price: 155,
      quantity: 0
    },
    {
      id: 5,
      title: "Fluffy Pancakes",
      imgURL: "https://i.redd.it/4u6x6vf5c5sa1.jpg",
      description: "souffle pancakes",
      price: 90,
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
