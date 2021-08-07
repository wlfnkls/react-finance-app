import Entries from "./components/Entries";
import Header from "./components/Header";
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState(data);
  const [formVisible, setformVisible] = useState(false)
  
  const showAddForm = () => {
    setformVisible(!formVisible);
  }

  const addItem = (item) => {
    const newItem = {...item};
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <Header formVisible={formVisible} showAddForm={showAddForm} onAdd={addItem} />
      <main>
        <Entries items={items} />
      </main>
    </div>
  );
}


const data = [
  { text: 'Salary', value: 2200 },
  { text: 'Shopping', value: -70 },
  { text: 'Rent', value: -600 },
]

export default App;
