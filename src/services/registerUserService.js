import axios from "axios";

const REACT_URL = import.meta.env.VITE_URL;

const baseURL = REACT_URL + "api/users";

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function getUsers() {
  /* return fetch(baseURL)
    .then((res) => res.json())
    .then((data) => data); */
  return axios.get(baseURL).then((res) => res.data);
}

async function createUser(user) {
  const token = `Bearer ${user.adminToken}`;
  const config = {
    headers: { Authorization: token },
  };

  console.log(token);
  return axios.post(baseURL, user, config).then((res) => res.data);
}

async function updateUser(newUser) {
  const token = `Bearer ${newUser.adminToken}`;
  const config = {
    headers: { Authorization: token },
  };

  const updateURL = `${baseURL}/${newUser.id}`; /* change ID */

  console.log(newUser.id);
  return axios.put(updateURL, newUser, config).then((res) => res.data);
}

async function deleteUser(id) {
  const token = `Bearer ${id.adminToken}`;
  const config = {
    headers: { Authorization: token },
  };
  const deleteURL = `${baseURL}/${id.id}`;

  console.log(id.id);
  return axios.delete(deleteURL, id, config).then((res) => res.data);

  /*   return fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data); */
}

export default {
  getUsers,
  createUser,
  deleteUser,
  setToken,
  updateUser,
  /* updatePerson,
  deletePerson, */
};
