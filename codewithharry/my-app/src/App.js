
import './App.css';
import Hello from './component/hello';
function App() {
  return (
    <div className="App">
      <Hello/>
     <p onClick={()=>console.log('Hello')}>Hello</p>
    </div>
  );
}

export default App;
