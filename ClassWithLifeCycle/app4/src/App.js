import logo from './logo.svg';
import './App.css';
import CssStyleSheetFun from './Component/Fun_Component/CssStyleSheetFun';
import InlineCssFun from './Component/Fun_Component/InlineCssFun';
import CssModuleFun from './Component/Fun_Component/CssModuleFun';
import './Component/Fun_Component/CssStyle.css';
import style from './Component/Fun_Component/CssStyle.module.css';
import FormHandlingCls from './Component/Class_Component/FormHandlingCls';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://lh3.googleusercontent.com/proxy/K6gtGmo4UHeG90OWX6NzENGZ7oHagvvuk0tFH9gad3XSSPxka9Ygz73Dh3IsTok0Yo_NuInjlp1uFZV-81tCMcVFgaskwqKN5LaOiuZ_k81ML_A" className="App-logo" alt="logo" />
        <div>
            <hr/>
            <CssStyleSheetFun primCon={true}/>
            <hr/>
            <InlineCssFun/>
            <hr/>
            <h6 className='error'>Error</h6>
            <h6 className={style.success}>Success</h6>   
            <CssModuleFun/>
            <hr/>
            <FormHandlingCls/>
            <hr/>
        </div>
      </header>
    </div>
  );
}

export default App;
