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

// All-category and empty search removing from query URL
const createQueryObject = (currentQuerry, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuerry;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuerry;
    return rest;
  }
  // if user choosed or search something else of All-category
  return { ...currentQuerry, ...newQuery };
};

// Get queries and set on initial loading
const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

// For totaling the number of products in the shopping cart
const sumProducts = (products) => {
  // item quantity
  const itemsCounter = products.reduce((counter, product) => counter + product.quantity, 0);

  // total price
  const total = products
    .reduce((total, cur) => total + cur.price * cur.quantity, 0)
    .toFixed(2);

  return { itemsCounter, total };
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumProducts,
};
