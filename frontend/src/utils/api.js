import { URL } from "./constants";

const checkResponse = async (res) => {
  if (res.ok || res.status === 201) {
    if (res.status === 204) return; 
    try {
      return await res.json();
    } catch {
      return; 
    }
  }
  try {
    const err = await res.json();
    return Promise.reject(err);
  } catch {
    return Promise.reject({ message: 'Empty error response' });
  }
};

const headersWithContentType = { "Content-Type": "application/json" };
const headersWithAuthorizeFn = () => ({
  "Content-Type": "application/json",
  authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
});

export const registerUser = (userData) =>
  fetch(`${URL}/signup/`, {
    method: "POST",
    headers: headersWithContentType,
    body: JSON.stringify(userData),
  }).then(checkResponse);

export const loginUser = (username, password) =>
  fetch(`${URL}/signin/`, {
    method: "POST",
    headers: headersWithContentType,
    body: JSON.stringify({ username, password }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.access_token) {
        sessionStorage.setItem("auth_token", data.access_token);
        return data;
      }
    });

export const logoutUser = () => {
  sessionStorage.removeItem("auth_token");
};

export const getOwnUser = () =>
  fetch(`${URL}/users/me/`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const refreshUser = (contextSetter) => {
  getOwnUser()
    .then((user) => contextSetter(user))
    .catch(() => console.error("Failed updating user"));
};

export const updateProfile = (user) =>
  fetch(`${URL}/users/me/`, {
    method: "PATCH",
    headers: headersWithAuthorizeFn(),
    body: JSON.stringify(user),
  }).then(checkResponse);

export const getCards = (page = 1) =>
  fetch(`${URL}/wishes/`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const getOwnWishes = () =>
  fetch(`${URL}/users/me/wishes`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const getAnotherUserWishes = (username) =>
  fetch(`${URL}/users/${username}/wishes`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const getAnotherUser = (username) =>
  fetch(`${URL}/users/${username}`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const queryUser = (query) =>
  fetch(`${URL}/users/find`, {
    method: "POST",
    headers: headersWithAuthorizeFn(),
    body: JSON.stringify({ query }),
  }).then(checkResponse);

export const removeWish = (id) =>
  fetch(`${URL}/wishes/${id}`, {
    method: "DELETE",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const addOffer = (offer) =>
  fetch(`${URL}/offers`, {
    method: "POST",
    headers: headersWithAuthorizeFn(),
    body: JSON.stringify(offer),
  }).then(checkResponse);

export const getTopCards = () =>
  fetch(`${URL}/wishes/top`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const getLastCards = (page = 1) =>
  fetch(`${URL}/wishes/last`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const getCard = (id) =>
  fetch(`${URL}/wishes/${id}`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const createCard = (wish) =>
  fetch(`${URL}/wishes`, {
    method: "POST",
    headers: headersWithAuthorizeFn(),
    body: JSON.stringify(wish),
  }).then(checkResponse);

export const updateCard = (card, id) =>
  fetch(`${URL}/wishes/${id}`, {
    method: "PATCH",
    headers: headersWithAuthorizeFn(),
    body: JSON.stringify(card),
  }).then(checkResponse);

export const copyWish = (id) =>
  fetch(`${URL}/wishes/${id}/copy`, {
    method: "POST",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const removeCard = (id) =>
  fetch(`${URL}/wishes/${id}`, {
    method: "DELETE",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const addCollection = (data) =>
  fetch(`${URL}/wishlistlists`, {
    method: "POST",
    headers: headersWithAuthorizeFn(),
    body: JSON.stringify(data),
  }).then(checkResponse);

export const getCollections = () =>
  fetch(`${URL}/wishlistlists`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const getCollection = (id) =>
  fetch(`${URL}/wishlistlists/${id}`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const deleteCollection = (id) =>
  fetch(`${URL}/wishlistlists/${id}`, {
    method: "DELETE",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);
