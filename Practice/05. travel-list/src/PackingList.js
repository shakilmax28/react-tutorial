import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onUpdateItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems =
    sortBy === "input"
      ? items
      : sortBy === "desc"
      ? [...items].sort((a, b) => a.description.localeCompare(b.description))
      : [...items].sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onUpdateItems={onUpdateItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="desc">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
