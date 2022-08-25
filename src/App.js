import React ,{useState} from 'react';
import Push from 'push.js';
import './App.css';

function App() {

  const [medical,setMedical]=useState("")
  const push = ()=>{

setTimeout(() => {
  Push.create(`Tienes que tomar ${medical}`, {
    body: `Te avisaremos en 8 horas`,
    icon: '/logo192.png',
 
    onClick: function () {
        window.focus();
        this.close();
    }
});
}, 3000);
   

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
