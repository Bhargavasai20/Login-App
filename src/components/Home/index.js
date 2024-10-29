import { Component } from "react";
import "./index.css";
import Message from "../Message";
import Login from "../Login";
import Logout from "../Logout";

class App extends Component {
  state = { login: false };

  onClickButton = () => {
    this.setState((prevState) => ({ login: !prevState.login }));
  };

  render() {
    const { login } = this.state;
    return (
      <div className="container">
        <div className="card">
          <Message login={login} />
          {login ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
