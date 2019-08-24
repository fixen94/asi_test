import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserEndpoint from "./endpoints";
const userEndpoint = new UserEndpoint();

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          customers: [],
      };
  }
  componentDidMount() {
    userEndpoint.getUsers().then((result) => {
      this.setState({ users: result })
    });
  }

  render() {
    const { users } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {users && users.map((user) => (
            <div key={user.id}>{user.id}</div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
