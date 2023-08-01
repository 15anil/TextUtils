
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


// let name = "anil";
function App() {
  const [btnText,setBtnText] = useState('Enable Dark Mode')
  const[mode,setmode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
     setBtnText("Enable Light Mode");
    }
    else{
      setmode('light') 
      document.body.style.backgroundColor = 'white';
      setBtnText("Enable Dark Mode");
    }
  }
  return (
   <>
  
<Navbar title = "TextUtils" mode = {mode} about = "About TextUtils" home = "Home" toggleMode={toggleMode} btnText = {btnText}/>
{/* <Navbar title = "TextUtils" mode = {mode}/> */}
<div className="container my-3">
<Textform heading = "Enter Your Text to analyze below " mode = {mode}/>
{/* <About/> */}

</div>

   </>
  );
}



export default App;
