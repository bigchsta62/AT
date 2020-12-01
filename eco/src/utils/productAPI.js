import axios from "axios";

const calls = {
  // Gets all product
  getProducts: function () {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProduct: async (id) =>{
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function (id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function (productData) {
    return axios.post("/api/products", productData);
  },
  // Saves a product to the database
  updateProduct: function (productData) {
    return axios.put("/api/products", productData);
  },
};

export default calls;
