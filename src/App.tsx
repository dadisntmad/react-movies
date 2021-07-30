import React from 'react';
import {Header} from "./components/Header/Header";
import {Movies} from "./components/Movies/Movies";

export const App: React.FC = () => {
  return (
    <div style={{background: '#141213'}}>
      <Header/>
      <Movies/>
    </div>
  );
}
