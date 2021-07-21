import './App.css';
import { UserProvider } from './Component/Class_Component/UserContext';
import ComponentC from './Component/Class_Component/ComponentC';
import ComponentB from './Component/Class_Component/ComponentB';

function App() {
  return (
    <div className="App">
    {/* 1st way with component C */}
      <UserProvider value='Nidhi'>
        <ComponentC/>
      </UserProvider>
      <hr/>
        {/* Show default value will show if component does not have matching provider above it in component tree*/}
        <ComponentC/>      
      <hr/>
      {/* 2nd way with component B */}
      <UserProvider value='Nidhi'>
        <ComponentB/>
      </UserProvider>
      <hr/>
    </div>
  );
}

export default App;

//parent component App > A > B > C

//pass direactly value props from App component to nested ComponentC without passing props through ComponentA and 
//ComponentB because of 'React Context' 

//it is only work with class component
//2nd way in limitation is that you can only subscribe to a single context using cotext type
//many time we need more then one context in this time consumer component 1st way to go 
