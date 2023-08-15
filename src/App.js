
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


// let name = "anil";
function App() { 
  const [btnText,setBtnText] = useState('switch to Black Dark Mode')
  const[mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null)
  const [greenText,setGreenText] = useState('switch to green dark mode')
  const [gmode,setGmode] = useState('light');
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1300)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark Mode has been enabled " , "success")
      setBtnText(" switch to Light Mode ");
    }
    else{
      setmode('light') 
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been enabled " , "success")
      setBtnText(" switch to Dark Mode ");
    }
  }
  const toggle2 = ()=>{
    if(gmode === 'light'){
      
    }
  }
  
  return (
   <>
  
<Navbar title = "TextUtils" mode = {mode} about = "About TextUtils" home = "Home" toggleMode={toggleMode} btnText = {btnText} greenText = {greenText} toggle2 = {toggle2} />
<Alert alert = {alert}/>
{/* <Navbar title = "TextUtils" mode = {mode}/> */}
<div className="container my-3">
<Textform showAlert = {showAlert} heading = "Enter Your Text to analyze below " mode = {mode}/>
{/* <About/> */}

</div>

   </>
  );
}



export default App;
