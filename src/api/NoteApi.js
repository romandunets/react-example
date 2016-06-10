function getClient() {
  var config = {
    baseURL: process.env.API_HOST
  };

  return axios.create(config);
}

export function listNotes() {
  getClient().get(`/notes`);
}
