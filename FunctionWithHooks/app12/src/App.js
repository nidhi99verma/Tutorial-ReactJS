import './App.css';
import UseEffectCls from './Components/Class_Component/UseEffectCls'
import UseEffectFun from './Components/Fun_Component/UseEffectFun'
import ConditionallyEffectsCls from './Components/Class_Component/ConditionallyEffectsCls'
import ConditionallyEffectsFun from './Components/Fun_Component/ConditionallyEffectsFun'
import RunOnceUseEffectCls from './Components/Class_Component/RunOnceUseEffectCls'
import RunOnceUseEffectFun from './Components/Fun_Component/RunOnceUseEffectFun'
import MouseContainerCls from './Components/Class_Component/MouseContainerCls'
import MouseContainerFun from './Components/Fun_Component/MouseContainerFun'
import DependencyUseEffectCls from './Components/Class_Component/DependencyUseEffectCls'
import DependencyUseEffectFun from './Components/Fun_Component/DependencyUseEffectFun'

function App() {
  return (
    <div className="App">
        <h5>Same work like UseEffect in class component</h5>
        <UseEffectCls/>
        <hr/>
        <h5>UseEffect in function component</h5>
        <UseEffectFun/>
        <hr/>
        <h5>Same work like UseEffect in class component</h5>
        {/* <ConditionallyEffectsCls/> */}
        <hr/>
        <h5>UseEffect in function component</h5>
        {/* <ConditionallyEffectsFun/> */}
        <hr/>
        <h5>Run Once UseEffect in class component</h5>
        {/* <RunOnceUseEffectCls/> */}
        <hr/>
        <h5>Run Once in function component</h5>
        {/* <RunOnceUseEffectFun/> */}
        <hr/>
        <h5>Cleanup UseEffect in class component</h5>
        {/* <MouseContainerCls/> */}
        <hr/>
        <h5>Cleanup function component</h5>
        {/* <MouseContainerFun/> */}
        <hr/>
        <h5>Dependency on UseEffect in class component</h5>
        <DependencyUseEffectCls/>
        <hr/>
        <h5>Dependency on function component</h5>
        <DependencyUseEffectFun/>
        <hr/>
    </div>
  ); 
}

export default App;
