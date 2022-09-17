import QRCode  from 'qrcode';
import './App.css';
import React from "react";
import { useState } from 'react';

import { useEffect } from 'react';

function App() {
  
  const [url, setUrl] = useState('');
  const [qrcodeGen, setQrcodeGen] = useState('');
  const qrcodeGenerator = () =>{
    QRCode.toDataURL(url, {width:800, margin:2, color:{light: '#ffffff', dark: '#000000'}}, (error, url) =>{
      if(error) return console.error(error)
      setQrcodeGen(url)
    })
  }

  
  return (
    <div className="App">
      <h1 className='App_text'>QR CODE GENERATOR</h1>
      <div className='App_createQR'>
        <input className='createQR' type="text" placeholder='ВВОД...' value={url} onChange={(e) => setUrl(e.target.value)} onKeyDown={key => {if(key.code ==="Enter" && url){qrcodeGenerator()}}}/>
        <button className='addCreateQR' onClick={qrcodeGenerator} >CREATE</button>
      </div>
      {qrcodeGen? <>
        <a href={qrcodeGen} className='downloadQRimg' download='qrcode.png'><img src={qrcodeGen} alt="" className='qrcode' width={300} /></a>
        <a href={qrcodeGen} className='downloadQR' download='qrcode.png'><img src="https://img.icons8.com/ios/50/000000/download--v1.png" width={40} height={40}/></a>
      </> :<p className='waitText'>ПОКА ТУТ НИЧЕГО НЕТ</p>
      }
    </div>
  );
}

export default App;
