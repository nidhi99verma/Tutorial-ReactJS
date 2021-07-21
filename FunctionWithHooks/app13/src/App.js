import './App.css';
import DataFetchingUseEffectCls from './Components/Class_Component/DataFetchingUseEffectCls'
import DataFetchingUseEffectFun from './Components/Fun_Component/DataFetchingUseEffectFun'
import IndividualdataFetchingCls from './Components/Class_Component/IndividualdataFetchingCls'
import IndividualdataFetchingFun from './Components/Fun_Component/IndividualdataFetchingFun'
import DataFetchingOnClickCls from './Components/Class_Component/DataFetchingOnClickCls'
import DataFetchingOnClickFun from './Components/Fun_Component/DataFetchingOnClickFun'

function App() {
  return (
    <div className="App">
     <hr/>
     <h5>Fetching data in useEffect in Class component</h5>
     {/* <DataFetchingUseEffectCls/> */}
     <hr/>
     <h5>Fetching data in useEffect in function component</h5>
     {/* <DataFetchingUseEffectFun/> */}
     <hr/>
     <h5>Fetching individual data in useEffect in Class component</h5>
     {/* <IndividualdataFetchingCls/> */}
     <hr/>
     <h5>Fetching individual data in useEffect in function component</h5>
     {/* <IndividualdataFetchingFun/> */}
     <hr/>
     <h5>Fetching individual data in useEffect in Class component</h5>
     {/* <DataFetchingOnClickCls/> */}
     <hr/>
     <h5>Fetching individual data in useEffect in function component</h5>
     {/* <DataFetchingOnClickFun/> */}
     <hr/>
    </div>
  );
}

export default App;
