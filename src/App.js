import Retool from 'react-retool'
import './App.css';

function App() {
  return (
    <div className="App">
      <p>embedded retool app</p>
      <Retool url="https://hejho.retool.com/embedded/public/429a65fc-196b-4a3c-b7f5-923e8b0f9c7a" />
    </div>
  );
}

export default App;
