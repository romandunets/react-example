import AppDispatcher from '../dispatcher/AppDispatcher';

class UserForm extends Component {

  constructor() {
    super();
    
    this.state = {
      user: {}
    };
  }

  getUser() {
    return this.state.user;
  }

  onUsernameInputChange(e) {
    let usernameInputValue = e.target.value;
    this.updateUser({ username: usernameInputValue });
  }

  updateUser(attribute) {
    let user = this.state.user;
    let attr = Object.keys(attribute)[0];
    user[attr] = attribute[attr];
    this.setState({ user: user });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let user = this.getUser();
    UsersActions.createUser(user);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          value={this.state.usernameInputValue}
          onChange={this.onUsernameInputChange} />
        <button>Create</button>
      </form>
    );
  }
}
