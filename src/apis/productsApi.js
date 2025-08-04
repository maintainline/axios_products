import axios from "axios";

const productsURL = "https://dummyjson.com/products";

const getProducts = async () => {
  try {
    const res = await axios.get(productsURL);
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async id => {
  try {
    const res = await axios.get(`${productsURL}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const postProduct = async () => {};
const deleteProduct = async () => {};
const putProduct = async () => {};
const patchProduct = async () => {};
export { getProducts, getProduct };
