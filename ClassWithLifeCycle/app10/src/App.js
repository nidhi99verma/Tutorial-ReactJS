import './App.css';
import HttpGetCls from './Component/Class_Component/HttpGetCls'
import HttpPostCls from './Component/Class_Component/HttpPostCls'

function App() {
  return (
    <div className="App">
      {/* <HttpGetCls/> */}
      <HttpPostCls/>
    </div>
  );
}

export default App;

//npm i axios
//for fake api : https://jsonplaceholder.typicode.com/