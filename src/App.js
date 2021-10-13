import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import UserContext from "./Context";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { loggedIn: null, user: null }
  }

  login = (user) => {
    this.setState({
      loggedIn: true,
      user
    })
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      user: null
    })
  }

  render() {
    const { loggedIn, user } = this.state

    return (
      <UserContext.Provider value={{
        loggedIn,
        user,
        login: this.login,
        logout: this.logout
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }

}

export default App;
