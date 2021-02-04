import './App.css'; 
import Sitemap from './Views/Sitemap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SitemapProp2 from './Views/SitemapProp2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Sitemap} />
          <Route path="/SitemapPropuesta2" component={ SitemapProp2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
