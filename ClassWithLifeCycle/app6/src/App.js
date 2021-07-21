//import logo from './logo.svg';
import './App.css';
import FragmentsFun from './Component/Fun_Component/FragmentsFun';
import ParentComponentCls from './Component/Class_Component/ParentComponentCls';
import RefsClass1 from './Component/Class_Component/RefsClass1';
import RefsClass2 from './Component/Class_Component/RefsClass2';
import RefParentCla3 from './Component/Class_Component/RefParentCla3';
import ForwardRefParentClas from './Component/Class_Component/ForwardRefParentClas';
import PortalFun from './Component/Fun_Component/PortalFun';
import ErrorParentFun from './Component/Fun_Component/ErrorParentFun';
import ErrorBoundaryCls from './Component/Class_Component/ErrorBoundaryCls';

function App() {
  return (
    <div className="App">
      {/* <FragmentsFun/> */}
      <hr/>
      {/* <ParentComponentCls/> */}
      <hr/>
      {/* <RefsClass1/> */}
      <hr/>
      {/* <RefsClass2/> */}
      <hr/>
      {/* <RefParentCla3/> */}
      <hr/>
      {/* <ForwardRefParentClas/>
      <hr/>
      <PortalFun/> */}
      <hr/>
      {/* <ErrorBoundaryCls>
        <ErrorParentFun heroName='IronMan'/>
        <ErrorParentFun heroName='SuperMan'/>
        <ErrorParentFun heroName='Joker'/>
      </ErrorBoundaryCls> */}
      {/* better to wrap each component with errorboundary*/}
      <ErrorBoundaryCls>
        <ErrorParentFun heroName='IronMan'/>
      </ErrorBoundaryCls>

      <ErrorBoundaryCls>
        <ErrorParentFun heroName='SuperMan'/>
      </ErrorBoundaryCls>

      <ErrorBoundaryCls>
        <ErrorParentFun heroName='Joker'/>
      </ErrorBoundaryCls>
    </div>
  );
}

export default App;
