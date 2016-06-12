import axios from 'axios';

function getClient() {
  var config = {
    baseURL: process.env.API_HOST
  };

  return axios.create(config);
}

export function listNotes() {
  return getClient().get(`/notes`);
}
