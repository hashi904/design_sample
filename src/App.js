import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './containers/users/Index';
import SignUp from './containers/users/SignUp';
import SignIn from './containers/users/SignIn';
import UserList from './containers/users/UserList';
import Profile from './containers/users/Profile';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
