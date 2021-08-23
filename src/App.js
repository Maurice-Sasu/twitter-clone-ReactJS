import './styles/App.css';
import Sidebar from './components/Sidebar';
import Feeed from './components/Feeed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
        <Sidebar/>

      {/* feed */}
      <Feeed/>

      {/* widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
