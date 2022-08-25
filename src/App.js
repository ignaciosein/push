import React ,{useState} from 'react';
import Push from 'push.js';
import './App.css';

function App() {

  const [medical,setMedical]=useState("")
  const push = ()=>{

setTimeout(() => {
  Push.create("Hello world!", {
    body: `Tienes que tomar ${medical}`,
    icon: '/icon.png',
 
    onClick: function () {
        window.focus();
        this.close();
    }
});
}, 6000);
   

  }
  
  return (
    <div className="App">
<h1>Introduce Medicamento</h1>
 <br />
 <input type="text" onChange={(e)=>setMedical(e.target.value)}/>
 <br />

 <button type="button" class="btn btn-primary" onClick={()=>push()}>Crear notificación</button> 
    </div>
  );
}

export default App;
