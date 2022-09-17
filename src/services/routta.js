import axios from "axios";

//const BASE_URL = "http://localhost:5000";
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
  const promise = axios.get(`${BASE_URL}/products/list`);
  return promise;
}

function logout() {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/auth/sign-in`, config);
    return promise;
}

export { postSignUp, postSignIn, getAllProducts, logout };
