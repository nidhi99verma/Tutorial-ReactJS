import './App.css';
import UseReducerFun from './Components/Fun_Component/UseReducerFun'
import UseReducerObject from './Components/Fun_Component/UseReducerObject'
import UseReducerMultiple from './Components/Fun_Component/UseReducerMultiple'
import UseReducerUseContext from './Components/Fun_Component/UseReducerUseContext'
import UseStateUseEffectFetchApi from './Components/Fun_Component/UseStateUseEffectFetchApi'
import UseReducerFetchApi from './Components/Fun_Component/UseReducerFetchApi'

function App() {
  return (
    <div className="App">
        <hr/>
        <h5>UseReducer in Function components</h5>
        <UseReducerFun/>      
        <hr/>
        <h5>UseReducer in state and action object in Function components</h5>
        <UseReducerObject/>      
        <hr/>
        <h5>Multiple UseReducer in Function components</h5>
        <UseReducerMultiple/>      
        <hr/>
        <h5>UseReducer with useContext in Function components</h5>
        <UseReducerUseContext/>      
        <hr/>
        <h5>Fetch API using useState and useEffect in Function components</h5>
        <UseStateUseEffectFetchApi/>      
        <hr/>
        <h5>Fetch API using useReducer in Function components</h5>
        <UseReducerFetchApi/>      
        <hr/>
    </div>
  );
}

export default App;
