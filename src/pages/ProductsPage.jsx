import { ImSearch } from "react-icons/im";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import Styles from "./ProductsPage.module.css";
import { useState } from "react";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={Styles.container}>
        <div className={Styles.products}>
          {!products.length && <Loader />}
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>Sidebar</div>
      </div>
    </>
  );
}

export default ProductsPage;
