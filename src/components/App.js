

import '../css/variable.scss';
import '../css/index.scss';
import '../css/header.scss';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Logement } from '../pages/Logement';

import {Route, Switch } from "react-router-dom";
import { Header } from './Header';
import { Footer } from './Footer';
import { NotFound } from '../pages/404';


function App() {
  return (
    <>
    <main>
      <Header/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/logement/:id" component={Logement} />
          <Route path="*" component={NotFound} />
      </Switch>
    </main>
      <Footer/>
    </>
  );
}

export default App;
