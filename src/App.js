import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import ImageLink from './components/ImageLink';
import Particles from 'react-particles-js';

const particlesParams = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}


function App() {
  return (
    <BrowserRouter>

      <Particles
        className="particles"
        params={particlesParams}
      />

      <Switch>
        <Route exact path="/">
          <div className="App">
            <NavBar />
            <ImageLink />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
