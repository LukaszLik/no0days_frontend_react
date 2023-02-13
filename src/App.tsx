import React from 'react';
import './App.scss';
import Navbar from './common/navbar/Navbar';
import Progress from './components/progress/Progress'
import { CssVarsProvider } from '@mui/joy/styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
      </header>
        <body className="App-body">
            <div>body</div>
            <CssVarsProvider>
                <Progress var={25}/>
            </CssVarsProvider>
        </body>
    </div>
  );
}

export default App;
