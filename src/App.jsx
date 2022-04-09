import logo from './logo.svg';
import QrReader from 'react-qr-scanner'
import { useState } from 'react';

function App() {
  const [openCamera, setOpenCamera]= useState(false)

  function scan(data) {
    console.log(data);
  }

  return (
    <div className="App">
      <button onClick={()=>setOpenCamera(v=> !v)}>{openCamera?"close":"open"} Camera</button>

      {
        openCamera&&<QrReader
          onScan={scan}
          facingMode="rear"
          style={{
            height: 240,
            width: 320,
          }}
        />
      }
    </div>
  );
}

export default App;
