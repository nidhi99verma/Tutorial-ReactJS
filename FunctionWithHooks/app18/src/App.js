import './App.css';
import BuiltinHooksFun1 from './Components/Fun_Component/BuiltinHooksFun1';
import BuiltinHooksFun2 from './Components/Fun_Component/BuiltinHooksFun2';
import ReuseableCustomeHookFun1 from './Components/Fun_Component/ReuseableCustomeHookFun1';
import ReuseableCustomeHookFun2 from './Components/Fun_Component/ReuseableCustomeHookFun2';
import BuiltinHooksFunA from './Components/Fun_Component/BuiltinHooksFunA';
import BuiltinHooksFunB from './Components/Fun_Component/BuiltinHooksFunB';
import ReusableCustomeHooksFunA from './Components/Fun_Component/ReusableCustomeHooksFunA';
import ReusableCustomeHooksFunB from './Components/Fun_Component/ReusableCustomeHooksFunB';
import BuiltinHooksFunX from './Components/Fun_Component/BuiltinHooksFunX';
import ReusableCustomeHooksFunX from './Components/Fun_Component/ReusableCustomeHooksFunX';

function App() {
  return (
    <div className="App">
      <h5>Built-in Hooks in function components</h5>
      <BuiltinHooksFun1/>
      <BuiltinHooksFun2/>
      <hr/>
      <h5>Reuseable Custome Hooks in function components</h5>
      <ReuseableCustomeHookFun1/>
      <ReuseableCustomeHookFun2/>
      <hr/>
      <h5>Built-in Hooks in function components</h5>
      <BuiltinHooksFunA/>
      <BuiltinHooksFunB/>
      <hr/>
      <h5>Reuseable Custome Hooks in function components</h5>
      <ReusableCustomeHooksFunA/>
      <ReusableCustomeHooksFunB/>
      <hr/>
      <h5>Built-in Hooks in function components</h5>
      <BuiltinHooksFunX/>
      <hr/>
      <h5>Reuseable Custome Hooks in function components</h5>
      <ReusableCustomeHooksFunX/>
    </div>
  );
}

export default App;
