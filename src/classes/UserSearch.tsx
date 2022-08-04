import { Component } from 'react';
import { render } from '@testing-library/react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[]; //array de objetos
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };

  render() {
    const { user, name } = this.state;
    return (
      <div>
        <h3>User Search</h3>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          <h5>{user && user.name}</h5>
          <h5>{user && user.age}</h5>
        </div>
      </div>
    );
  }
}

export default UserSearch;
