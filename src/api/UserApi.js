import Api from './Api';

class UserApi extends Api {
  static listUsers() {
    return this.getClient().get('/users');
  }
}

export default UserApi;
