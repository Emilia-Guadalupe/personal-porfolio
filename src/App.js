import './App.css';

//Components
import Header from './Components/Header/Header';
import Name from './Components/Name/Name';
import AboutMe from './Components/AboutMe/AboutMe';
import MyStack from './Components/MyStack/MyStack';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Name />
      <AboutMe />
      <MyStack />
      <Footer />
    </div>
  );
}

export default App;
