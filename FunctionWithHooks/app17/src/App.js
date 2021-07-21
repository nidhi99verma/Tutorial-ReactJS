import './App.css';
import UseRefFun from './Components/Fun_Component/UseRefFun';
import ClearTimeIntervalCls from './Components/Class_Component/ClearTimeIntervalCls';
import UseRefTimerFun from './Components/Fun_Component/UseRefTimerFun';

function App() {
  return (
    <div className="App">
      <h5>UseRef in functional component</h5>
      <UseRefFun/>
      <hr/>
      <h5>UseRef similar use in Class component</h5>
      <ClearTimeIntervalCls/>
      <hr/>
      <h5>UseRef in functional component</h5>
      <UseRefTimerFun/>
    </div>
  );
}

export default App;
