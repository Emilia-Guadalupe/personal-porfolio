import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Components
import Header from './Components/Header/Header';
import Name from './Components/Name/Name';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import MyStack from './Components/MyStack/MyStack';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header />
        <Switch>
        <Route exact path="/">
            <Name />
            <AboutMe />
        </Route>
        <Route path="/my-stack">
            <MyStack />
        </Route>
        </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
