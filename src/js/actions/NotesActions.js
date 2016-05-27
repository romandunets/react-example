import dispatcher from "../dispatcher";

export function createNote(name, group) {
  dispatcher.dispatch({
    type: "CREATE_NOTE",
    name,
    group
  });
}

export function deleteNote(id) {
  dispatcher.dispatch({
    type: "DELETE_NOTE",
    id
  });
}

export function reloadNotes() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_NOTES"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_NOTES", notes: [
      {
        id: 1,
        name: "English lesson 2",
        group: "Studies",
        updated_at: "56 minutes ago"
      },
      {
        id: 2,
        name: "Germany lesson 2",
        group: "Studies",
        updated_at: "3 days ago"
      },
      {
        id: 3,
        name: "Railroad modeling scenery",
        group: "Hobby",
        updated_at: "about week ago"
      }
    ]});
  }, 1000);
}
