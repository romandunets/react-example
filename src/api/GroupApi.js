import Api from './Api';

class GroupApi extends Api {
  static listGroups() {
    return this.getClient().get('/groups');
  }

  static getGroup(id) {
    return this.getClient().get(`/groups/${id}`);
  }
}

export default GroupApi;
