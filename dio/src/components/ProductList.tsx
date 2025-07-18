type ProductProps = {
  title: string;
  imgURL: string;
  description: string;
  price: number;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

function ProductList(props: ProductProps) {
  const subtotal = props.price * props.quantity;

  return (
    <div className="product-card">
      <h4 style={{ color: "white" }}>{props.title}</h4>
      <img
        src={props.imgURL}
        alt="Product"
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <p style={{ color: "white" }}>{props.description}</p>
      <p><strong style={{ color: "white" }}>Price: ₱{props.price}</strong></p>

      <div className="counter-controls">
        <button onClick={props.onDecrement}>-</button>
        <span style={{ color: "white" }}>{props.quantity}</span>
        <button onClick={props.onIncrement}>+</button>
      </div>

      <p className="subtotal">
        <strong style={{ color: "white" }}>Total: ₱ {subtotal.toFixed(2)}</strong>
      </p>
    </div>
  );
}

export default ProductList;
