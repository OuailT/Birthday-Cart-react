import './App.css';
import List from './Components/List';
import Data from './Data/Data';
import React, { useState } from 'react';

function App() {
  const[people, setPeople] = useState(Data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={()=>setPeople([])} >All Clean</button>
      </section>
    </main>
  )
}

export default App;
