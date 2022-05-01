import Campus from './Campus'; 
import React from 'react';
import * as ReactDOM from 'react-dom';
import {Map} from '@esri/react-arcgis';
import {Scene} from '@esri/react-arcgis';
import {WebMap,WebScene} from '@esri/react-arcgis';

function App() {
  // like we started out with
  ReactDOM.render(
    <Scene /> ,
    document.getElementById('container')
  );
  }// App()
  
  // INSTEAD of 'export default App;'
  export default (props) => (
      <Scene style={{ width: '70vw', height: '90vh' }}
          //mapProperties={{ basemap: 'satellite' }}
          viewProperties={{
              center: [-118.28538,34.0205],
              zoom: 15
          }}>
          <Campus />
      </Scene>
  )


/*
function App() {
 ReactDOM.render(
  <div style={{ width: '100vw', height: '100vh' }}>
    <WebMap id="7f296af5b8944a30b5eb1758798c69af" />
    <WebScene id="f8aa0c25485a40a1ada1e4b600522681" />
  </div>,
  document.getElementById('container')
 );// ReactDOM.render()
}// App()

export default App; 
*/
