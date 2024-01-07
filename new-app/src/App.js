import "./App.css";
import { Link } from "./components/Link";
const shouldRenderParagraph = true;
export default function App() {
  let paragraph = null;

  if (shouldRenderParagraph) paragraph = <p>Another paragraph</p>;
  return (
    <div className="App">
      <Link href="./lego-shop" name="lego-shop" />
      <Link href="./LEGO" name="LEGO" />
      {shouldRenderParagraph ? <p>Hello there</p> : null}
      {shouldRenderParagraph && <p>Even shorter</p>}
      {paragraph}
      <ProductList />
    </div>
  );
}

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function Product(props) {
  const name = props.name;
  return <div>{name}</div>;
}

function ProductList() {
  return (
    <div>
      {products.map((product, index) => {
        const productName = product.name;
        return <Product key={productName + index} name={productName} />;
      })}
    </div>
  );
}
