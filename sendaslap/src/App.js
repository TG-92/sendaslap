
import './App.css';
import Navbar from './components/Rudi/Navbar';
import Content from './components/layout/content/Content';

import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/> 
      <Footer/>
    </div>
  );
}

export default App;
