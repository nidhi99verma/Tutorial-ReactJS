import './App.css';
import StateInCls from './Components/Class_Component/StateInCls';
import PrevStateCls from './Components/Class_Component/PrevStateCls';
import UseStateInFun from './Components/Fun_Component/UseStateInFun';
import PrevStateFun from './Components/Fun_Component/PrevStateFun';
import ObjectInStateCls from './Components/Class_Component/ObjectInStateCls';
import ObjectInStateFun from './Components/Fun_Component/ObjectInStateFun';
import ArrayInStateCls from './Components/Class_Component/ArrayInStateCls';
import ArrayInStateFun from './Components/Fun_Component/ArrayInStateFun';

function App() {
  return (
    <div className="App">
      <h5>State in Class component</h5>
      <StateInCls/>
      <hr/>
      <h5>Use State in Function component</h5>
      <UseStateInFun/>
      <hr/>
      <h5>Previous State in Class component</h5>
      <PrevStateCls/>
      <hr/>
      <h5>Previous State in Function component</h5>
      <PrevStateFun/>
      <hr/>
      <h5>State with Object in Class component</h5>
      <ObjectInStateCls/>
      <hr/>
      <h5>State with Object in Function component</h5>
      <ObjectInStateFun/>
      <hr/>
      <h5>State with Array in Class component</h5>
      <ArrayInStateCls/>
      <hr/>
      <h5>State with Array in Function component</h5>
      <ArrayInStateFun/>
      <hr/>
    </div>
  );
}

export default App;
