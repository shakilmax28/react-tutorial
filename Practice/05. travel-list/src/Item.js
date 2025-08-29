export default function Item({ item, onDeleteItems, onUpdateItems }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onUpdateItems(item)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item)}>❌</button>
    </li>
  );
}
