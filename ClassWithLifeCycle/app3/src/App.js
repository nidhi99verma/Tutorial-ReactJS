import './App.css';
import EventFun from './Components/Fun_Components/EventFun';
import EventCls from './Components/Class_Components/EventCls';
import EventBindCls from './Components/Class_Components/EventBindCls';
import MethodAsPropsParentCls from './Components/Class_Components/MethodAsPropsParentCls';
import ConditionalRenderingCls from './Components/Class_Components/ConditionalRenderingCls';
import ListRenderingFun from './Components/Fun_Components/ListRenderingFun';
import ListRenderingCls from './Components/Class_Components/ListRenderingCls';

function App() {
  return (
    <div className="App">
      <EventFun/>
      <hr/>
      <EventCls/>
      <hr/>
      <EventBindCls/>
      <hr/>
      <MethodAsPropsParentCls/>
      <hr/>
      <ConditionalRenderingCls/>
      <hr/>
      <ListRenderingFun/>
      <hr/>
      <ListRenderingCls/>
    </div>
  );
}

export default App;
