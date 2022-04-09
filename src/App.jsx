import logo from './logo.svg';
import QrReader from 'react-qr-scanner'

function App() {
  function scan(data) {
    console.log(data);
  }

  return (
    <div className="App">
      <QrReader
        onScan={scan}
        style={{
          height: 240,
          width: 320,
        }}
      />
    </div>
  );
}

export default App;
