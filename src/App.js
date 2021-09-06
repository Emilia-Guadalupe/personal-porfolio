import './App.css';

//Components
import Header from './Components/Header/Header';
import Name from './Components/Name/Name';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import MyStack from './Components/MyStack/MyStack';
import MyProjects from './Components/MyProjects/MyProjects';
import ProjectsGallery from './Components/MyProjects/ProjectsGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Name />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
