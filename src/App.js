import './App.css';
import { useState } from 'react';
import Hijo from './components/Hijo/Hijo';

function App() {

  const [ datosPadre, setDatosPadre ] = useState("");

  return (
    <>
      <h1>Pushing up data</h1>
      <h2>Componente principal.</h2>
      <p>Datos: {JSON.stringify(datosPadre)}</p>
      <Hijo parentSetter={setDatosPadre}/>
    </>
  );
}

export default App;
