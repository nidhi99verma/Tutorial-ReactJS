import './App.css';
import UseCallbackParentFun from './Components/Fun_Component/UseCallbackParentFun'
import UseMemoFun from './Components/Fun_Component/UseMemoFun'

function App() {
  return (
    <div className="App">
      <hr/>
      <h5>UseCallback in function component</h5>
      <UseCallbackParentFun/>
      <hr/>
      <h5>UseMemo in function component</h5>
      <UseMemoFun/>
      <hr/>
    </div>
  );
}

export default App;
