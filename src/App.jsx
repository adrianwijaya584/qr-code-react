import logo from './logo.svg';
import { useState } from 'react';
import {QrReader} from "react-qr-reader"

function App() {
  const [openCamera, setOpenCamera]= useState(false)
  const [data, setData]= useState("test")

  function scan(data, error) {
    if(data) {
      setOpenCamera(false)
      setData(data?.text)

      window.open(data?.text)
    }

    if(error) {
      console.log(error)
    }
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

      <p>{data}</p>
    </div>
  );
}

export default App;
