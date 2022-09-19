import axios from "axios";

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://routtastore.herokuapp.com";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("routtastore"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-in`, body);
  return promise;
}

function getAllProducts() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/products/list`, config);
  return promise;
}

function getProductById(productId) {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/products/${productId}`, config);
  return promise;
}
function getProductByCategory(categoryKey) {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/category/${categoryKey}`, config);
  return promise;
}

function logout() {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/auth/sign-in`, config);
  return promise;
}

function getUser() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/auth/sign-in`, config);
  return promise;
}

function addAddress(body) {
  const config = createHeaders();
  const promise = axios.put(`${BASE_URL}/user/address`, body, config);
  return promise;
}

function addCard(body) {
  const config = createHeaders();
  const promise = axios.put(`${BASE_URL}/user/card`, body, config);
  return promise;
}

function addCart(body) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/cart`, body, config);
  return promise;
}

function getCart() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/cart`, config);
  return promise;
}

function deleteFromCart(productId) {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/cart/${productId}`, config);
  return promise;
}

function submitOrder(cart) {
    const body = {cart: cart};
    const config = createHeaders();
    const promise = axios.post(`${BASE_URL}/order`, body, config);
    return promise;
}

export {
  postSignUp,
  postSignIn,
  getAllProducts,
  getProductById,
  getProductByCategory,
  logout,
  addAddress,
	addCard,
  getUser,
  addCart,
  getCart,
  deleteFromCart,
  submitOrder
};
