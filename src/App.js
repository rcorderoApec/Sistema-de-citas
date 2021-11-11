import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Citas from './pages';

function App() {
  return (
    <div className="container row">
      <Menu/>
      <Citas/>
    </div>
  );
}

export default App;
