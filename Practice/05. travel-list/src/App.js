import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(item) {
    setItems((items) => items.filter((it) => it.id !== item.id));
  }

  function handleUpdate(item) {
    console.log(item);
    setItems((items) =>
      items.map((it) =>
        it.id === item.id ? { ...it, packed: !it.packed } : it
      )
    );
  }

  function handleClear() {
    setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={(item) => handleAddItems(item)} />
      <PackingList
        items={items}
        onDeleteItems={(item) => handleDelete(item)}
        onUpdateItems={(item) => handleUpdate(item)}
        onClearItems={() => handleClear()}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
