import Api from './Api';

class NoteApi extends Api {
  static listNotes() {
    return this.getClient().get('/notes');
  }

  static getNote(id) {
    return this.getClient().get(`/notes/${id}`);
  }
}

export default NoteApi;
