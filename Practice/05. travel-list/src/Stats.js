export default function Stats({ items }) {
  const totalItem = items.length;
  const packedItem =
    totalItem > 0 ? items.filter((item) => item.packed).length : Number(0);
  const percentage =
    totalItem > 0 ? Math.round((packedItem * 100) / totalItem) : Number(0);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything!!! Ready to Go!!!"
          : `You have ${totalItem} items on your list, and you have already packed
          ${packedItem} (${percentage}%)`}
      </em>
    </footer>
  );
}
