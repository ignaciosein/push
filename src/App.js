import React from 'react';
import Push from 'push.js';
import './App.css';

function App() {

  
  const push = ()=>{

setTimeout(() => {
  Push.create("Hello world!", {
    body: "QUE PASA PADREEEEEE",
    icon: '/icon.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
}, 6000);
   

  }
  
  return (
    <div className="App">
 
 <button onClick={()=>push()}>Notificame</button>
 
    </div>
  );
}

export default App;
