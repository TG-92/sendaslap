
import './App.css';
import Navbar from './components/Rudi/Navbar';
import Content from './components/layout/content/Content';
import Buttonred from './components/layout/buttonred/Buttonred';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Buttonred/>
      <Footer/>
    </div>
  );
}

export default App;
