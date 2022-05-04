import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Otpform from "./pages/otpform/Otpform";
import Passwordform from "./pages/passwordform/Passwordform";
import Verify from "./pages/verify/Verify";
import SearchResult from "./pages/searchResult/SearchResult";
import Messenger from "./pages/messenger/Messenger";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {user ? <Home /> : <Verify />}
        </Route>
        <Route path="/login">
        {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/" /> : <Register />} 
        </Route>
        <Route path="/verify">
            <Verify />
        </Route>
        <Route path="/forgot-password">
            <Otpform />
        </Route>
        <Route path="/password-change">
            <Passwordform />
        </Route>
        <Route path="/search-text">
            <SearchResult />
        </Route>
        <Route path="/messenger">
        <Messenger /> 
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;