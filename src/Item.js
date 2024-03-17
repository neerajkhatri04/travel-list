export default function Item({ item, deleteItem, onItemPacked }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onItemPacked(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❎</button>
    </li>
  );
}
