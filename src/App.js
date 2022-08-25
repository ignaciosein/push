import React from 'react';
import Push from 'push.js';
import './App.css';

function App() {

  
  const push = ()=>{

setTimeout(() => {
  Push.create("Hello world!", {
    body: "QUE PASA PADREEEEEE",
    icon: '/icon.png',
 
    onClick: function () {
        window.focus();
        this.close();
    }
});
}, 6000);
   

  }
  
  return (
    <div className="container">
 
 <button type="button" class="btn btn-primary" onClick={()=>push()}>Crear notificación</button> 
    </div>
  );
}

export default App;
