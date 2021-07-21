import logo from './logo.svg';
import './App.css';
import FirstFunCom from './fun_components/FirstFunCom';
import FirstClsCom from './class_components/FirstClsCom';
import JsxCom from './fun_components/JsxCom';
import PropsFun from './fun_components/PropsFun';
import PropsCls from './class_components/PropsCls';
import StateCls from './class_components/StateCls';
import CounterCls from './class_components/CounterCls';
import DestructurPropsFun from './fun_components/DestructurPropsFun';
import DestructurPropsCls from './class_components/DestructurPropsCls';
import DestructurStateCls from './class_components/DestructurStateCls';

function App() {
  return (
    <div className="App">
      <FirstFunCom/>
      <hr/>
      <FirstClsCom/>
      <hr/>
      <JsxCom/>
      <hr/>
      <PropsFun name='Nidhi😎' age='25👧'><p>This is child props in Nidhi</p></PropsFun>
      <PropsFun name='Ajai🤩' age='30👦'><button>child props in Ajai</button></PropsFun>
      <hr/>
      <PropsCls name='Nidhi😎' age='25👧'><p>This is child props in Nidhi</p></PropsCls>
      <PropsCls name='Ajai🤩' age='30👦'><button>child props in Ajai</button></PropsCls>
      <hr/>
      <StateCls/>
      <hr/>
      <CounterCls/>
      <hr/>
      <DestructurPropsFun name='Nidhi😎' age='25👧'><p>This is child props in Nidhi</p></DestructurPropsFun>
      <hr/>
      <DestructurPropsCls name='Nidhi😎' age='25👧'><p>This is child props in Nidhi</p></DestructurPropsCls>
      <hr/>
      <DestructurStateCls/>
    </div>
  );
}

export default App;


//rce : class boiler plate
//rfce : function boiler plate
//rconst : for constructor
//rpce : for pure class 