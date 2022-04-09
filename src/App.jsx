import logo from './logo.svg';
import { useState } from 'react';
import {QrReader} from "react-qr-reader"

function App() {
  const [openCamera, setOpenCamera]= useState(false)

  function scan(data, error) {
    console.log(data);
  }

  return (
    <div className="App">
      <button onClick={()=>setOpenCamera(v=> !v)}>{openCamera?"close":"open"} Camera</button>

      {
        openCamera&&<QrReader
          onResult={scan}
          constraints={{
            facingMode: {
              exact: "environment"
            },
          }}
        />
      }
    </div>
  );
}

export default App;
