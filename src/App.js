
import './App.css';
import ProjectsView from './components/ProjectsView';
import Header from './components/Header';
import Footer from './components/Footer';
import Tech from './components/Tech';

import { ThemeProvider } from './ThemeContext';
import Background from './Background';
import Toggle from './ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <Background>
        <div className="App">
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
          <Header />
          <ProjectsView />
          <Tech />
          <Footer />
        </div>
      </Background>
    </ThemeProvider>
    
  );
}

export default App;
