import logo from './logo.svg';
import './App.css';
import ClsEventBinding from './Component/ClsEventBinding';
import FuncEventBinding from './Component/FuncEventBinding';

function App() {
  return (
    <div className="App">
      <h1>Class event Binding</h1>
      <ClsEventBinding />
      <h1>Function event Binding</h1>
      <FuncEventBinding />
    </div>
  );
}

export default App;
