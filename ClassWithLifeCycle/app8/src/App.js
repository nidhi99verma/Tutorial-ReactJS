import logo from './logo.svg';
import './App.css';
import WithoutRenderPropsClickCounterCls from './Component/Class_Component/WithoutRenderPropsClickCounterCls';
import WithoutRenderPropsHoverCounterCls from './Component/Class_Component/WithoutRenderPropsHoverCounterCls';
import AcceptRenderPropsCls from './Component/Class_Component/AcceptRenderPropsCls';
import ClickCounterWithRenderPropsCls from './Component/Class_Component/ClickCounterWithRenderPropsCls';
import HoverCounterWithRenderPropsCls from './Component/Class_Component/HoverCounterWithRenderPropsCls';
import RenderPropsCounterComponent from './Component/Class_Component/RenderPropsCounterComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <hr/>
      <h5>Without Render props clicked and hovered counter component</h5>
        <WithoutRenderPropsClickCounterCls/>
        <WithoutRenderPropsHoverCounterCls/>
      <hr/>

      <h5>With Render props component</h5>
        <AcceptRenderPropsCls name={(isLoggedIn) => isLoggedIn ? 'Nidhi' : 'Guest'}/>

      <hr/>
      <h5>With Render props clicked and hovered counter component</h5>
        <RenderPropsCounterComponent 
          show={(count, incrementCount) => (<ClickCounterWithRenderPropsCls count={count} incrementCount={incrementCount}/>)}
        />
        <RenderPropsCounterComponent 
          show={(count, incrementCount) => (<HoverCounterWithRenderPropsCls count={count} incrementCount={incrementCount}/>)}
        />

        {/* or */}

      {/* <hr/>
      <h5>With Render props clicked and hovered counter component</h5>
        <RenderPropsCounterComponent>
          {
            (count, incrementCount) => (
              <ClickCounterWithRenderPropsCls count={count} incrementCount={incrementCount}/>
            )
          }
        </RenderPropsCounterComponent>
        <RenderPropsCounterComponent>
          {
            (count, incrementCount) => (
              <HoverCounterWithRenderPropsCls count={count} incrementCount={incrementCount}/>
            )
          }
        </RenderPropsCounterComponent> */}
      </header>
    </div>
  );
}

export default App;
