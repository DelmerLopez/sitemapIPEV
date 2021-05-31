import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clima from './Components/Clima';
import Logos from './Components/Logos';
import UserSelector from './Views/UserSelector';
import DerechohabienteSitemap from './Views/DerechohabienteSitemap';
import './styles/sitemap.css';
import GobiernoSitemap from './Views/GobiernoSitemap';

function App() {
  return (
    <div className="App">
      <Clima />
      <Logos />
      <h2 className="title">Mapa de sitio del Instituto de Pensiones del Estado de Veracruz</h2>
      <BrowserRouter basename={'/mapaSitio'}>
        <Switch>
          <Route path="/" exact component={UserSelector} />
          <Route path="/Derechohabiente" component={DerechohabienteSitemap} />
          <Route path="/Gobierno" component={GobiernoSitemap} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
