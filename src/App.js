import logo from './logo.svg';
import './App.css';
import FlexiForm from './components/FlexiForm';
import React, {useState} from 'react'
import useFlexiData from './components/useFlexiData';

function App() {
  const initState = useFlexiData()

  const [flexiConfig, setFlexiConfig] = useState(initState);
  
  function setDynamicVal1(obj,k, val){
    for(let i=0;i<obj.items.length;i++){
    let item = obj.items[i];
    
    if(item.key){
    if(item.key === k){
    console.log(item.key === k,item.key ,k)
    item[item['name']] = val;
    return obj;
    }}
    
    }
    for(let i=0;i< obj.children.length;i++){
    setDynamicVal1(obj.children[i], k, val)
    }
      
    }
    // setDynamicVal1(flexiConfig, '0', 'sukesh')

    function setDynamicVal(k,val){
      console.log(k, val)
      const tempObj = setDynamicVal1(flexiConfig, k, val);
      console.log(tempObj)
      setFlexiConfig(tempObj)
    }

  const onSubmit = ()=>{
    console.log(flexiConfig)
  }
  return (
    <div className="App">
      <header >
        <FlexiForm flexiConfig={flexiConfig} setDynamicVal={setDynamicVal}/>
        <button onClick={onSubmit} >Submit</button>
      </header>
    </div>
  );
}

export default App;
