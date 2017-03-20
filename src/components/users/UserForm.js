import AppDispatcher from '../dispatcher/AppDispatcher';

class UserForm extends Component {

  createUser(e) {
    e.preventDefault();
    
    let username = React.findDOMNode(this.refs.item_title).value.trim();
    
    React.findDOMNode(this.refs.item_title).value = '';
    
    AppDispatcher.dispatch({
      action: 'add-item',
      user: {
        username: username
      }
    });
  }

  render() {
    return (
      <form onSubmit={ this.createUser.bind(this) }>
        <input type="text" ref="username"/>
        <button>Create</button>
      </form>
    );
  }
}
