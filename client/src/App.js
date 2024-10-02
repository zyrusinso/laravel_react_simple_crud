import React from 'react';
import './App.css';
import CrudTable from './components/CrudTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple CRUD App</h1>
      </header>
      <main>
        <CrudTable />
      </main>
    </div>
  );
}

export default App;
