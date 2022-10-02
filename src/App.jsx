import 'tw-elements';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import EventPage from './Pages/EventPage';
import CreateEvent from './Pages/CreateEvent';


function App() {

  return (
    <Router>
        <div className="App font-dm-sans">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/event" component={EventPage} />
            <Route exact path="/create" component={CreateEvent} />
          </Switch>
        </div>
      </Router>
  )
}

export default App
