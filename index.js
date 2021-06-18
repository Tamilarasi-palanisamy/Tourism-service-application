import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Login extends React.Component {
  render(){
    return (
     <div class="container">
      <header>
        <h1>Tourism Service Application </h1>
      </header>
      <button id="reg"  class="btn btn-primary">Register</button>
      <button id="reg"  class="btn btn-primary">Login</button>
  <form action="./App.js">
    <fieldset id="login">
    <div class="form-group">
      <h1>Login</h1>
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember" /> Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button> <br/>
    </fieldset>
  </form>
</div>

    );

  }
}

ReactDOM.render(<Login />, document.getElementById("root"));