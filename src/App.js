import Welcome from './views/welcome/welcome';
import WhoamI from './views/whoAmi/whoAmi';
import { Router } from '@reach/router';
import Motivation from './views/motivation/motivation';
import './App.scss';
import Background from './views/background/background';

function App() {
  return (
    <div className="App">
      <Router>
      <Welcome default path="/"/>
      <WhoamI path="/whoAmI"/>
      <Motivation path="/motivation"/>
      <Background path="/background"/>


      </Router>
      
    </div>
  );
}

export default App;
