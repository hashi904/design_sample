import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './containers/users/SignUp';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
