import React, { useRef } from 'react';
import './App.css';
import useMousePosition from './useMousePosition';

const styles: { [key: string]: React.CSSProperties } = {
  map: {
    width: "auto",
    height: "80vh",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}

function App() {

  const mapRef = useRef<HTMLElement>()

  const { clientX, clientY } = useMousePosition(mapRef)

  const posX = Math.round(clientX * 760 * .56)
  const posY = Math.round(clientY * 926 * .56)

  return (
    <div className="App">

      {/*@ts-ignore*/}
      <img ref={mapRef} src="/ponte-sat.png" style={styles.map} className="App-logo" alt="logo" />

      <p>
        x: {posX}, z: {posY}
      </p>
    </div>
  );
}

export default App;
