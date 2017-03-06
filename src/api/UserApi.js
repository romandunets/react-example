import Api from './Api';

class UserApi extends Api {
  static listUsers() {
    return this.getClient().get('/users');
  }

  static getUser(id) {
    return this.getClient().get(`/users/${id}`);
  }
}

export default UserApi;
