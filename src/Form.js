import { useState } from "react";

export default function Form({ onNewItem }) {
  const [itemName, setItemName] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;

    const newObj = {
      id: Date.now(),
      description: itemName,
      quantity: select,
      packed: false,
    };

    onNewItem(newObj);

    setItemName("");
    setSelect(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>add something here 💕</h3>
      <select value={select} onChange={(e) => setSelect(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      ></input>
      <button>➕</button>
    </form>
  );
}
