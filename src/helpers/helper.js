// Shorten product names
const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

// search product
const searchProducts = (products, search) => {
  // if the user has not entered anything, display all products.
  if (!search) return products;
  // if the user entered product name title
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

// filter product by categories
const filterProducts = (products, category) => {
  // if the user has not entered anything, display all products.
  if (!category) return products;
  // if the user entered product category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

export { shortenText, searchProducts, filterProducts };
