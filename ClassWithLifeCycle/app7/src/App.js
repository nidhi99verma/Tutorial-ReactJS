import logo from './logo.svg';
import './App.css';
import WithoutHocClickCounterCls from './Component/Class_Component/WithoutHocClickCounterCls';
import WithoutHocHoverCounterCls from './Component/Class_Component/WithoutHocHoverCounterCls';
import ClickCounterWithHocCls from './Component/Class_Component/ClickCounterWithHocCls';
import HoverCounterWithHocCls from './Component/Class_Component/HoverCounterWithHocCls';

function App() {
  return (
    <div className="App">
      <h5>Without HOC</h5>
      <WithoutHocClickCounterCls/>
      <WithoutHocHoverCounterCls/>
      <hr/>
      <h5>With HOC</h5>
      <ClickCounterWithHocCls/>
      <HoverCounterWithHocCls/>
      <hr/>
      <h5>With HOC passing props</h5>
      <ClickCounterWithHocCls name='Nidhi'/>
      <HoverCounterWithHocCls/>
      <hr/>
    </div>
  );
}

export default App;
