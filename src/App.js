import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all list items?"
    );

    confirmed ? setItems([]) : void 0;
  }

  function handleNewItem(item) {
    setItems([...items, item]);
  }

  function handleItemPacked(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onNewItem={handleNewItem} />
      <List
        items={items}
        deleteItem={handleDeleteItem}
        onItemPacked={handleItemPacked}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
