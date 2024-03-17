import { useState } from "react";
import Item from "./Item";

export default function List({ items, deleteItem, onItemPacked, onClear }) {
  const [sortby, setSortby] = useState("input");

  let sortItems;

  if (sortby === "input") sortItems = items;
  if (sortby === "alphabet")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "completed")
    sortItems = items.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            onItemPacked={onItemPacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="alphabet">Sort by alphabet</option>
          <option value="completed">Sort by completed</option>
        </select>
        <button onClick={onClear}>Clear All</button>
      </div>
    </div>
  );
}
