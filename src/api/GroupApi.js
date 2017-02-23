import Api from './Api';

class GroupApi extends Api {
  static listGroups() {
    return this.getClient().get('/groups');
  }
}

export default GroupApi;
