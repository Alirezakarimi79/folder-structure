import './App.css';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
