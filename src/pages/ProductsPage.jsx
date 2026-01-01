import Card from "../components/Card";
import { useProducts } from "../context/ProductContext";
import Styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={Styles.container}>
      <div className={Styles.products}>
        {!products.length && <p>Loading ...</p>}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
