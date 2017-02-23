import Api from './Api';

class NoteApi extends Api {
  static listNotes() {
    return this.getClient().get('/notes');
  }
}

export default NoteApi;
