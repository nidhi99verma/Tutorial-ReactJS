import './App.css';
import UseContextFun from './Components/Fun_Component/UseContextFun'
import AllUseContextCls from './Components/Class_Component/AllUseContextCls'

function App() {
  return (
    <div className="App">
      <hr/>
      <h5>UseContext in Class component</h5>
      <AllUseContextCls/>
      <hr/>
      <h5>UseContext in function component</h5>
      <UseContextFun/>
    </div>
  );
}

export default App;
