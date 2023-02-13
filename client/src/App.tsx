import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

import './styles/App.scss';

function App() {
  return (
      <main className='background'>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
      </main>
  );
}

export default App;
