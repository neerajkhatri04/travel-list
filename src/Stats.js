export default function Stats({ items }) {
  const totalItems = items.length;
  const completed =
    (items.filter((item) => item.packed).length / totalItems) * 100;
  return (
    <footer className="stats">
      {totalItems === 0 ? (
        <em>You have {totalItems} list items</em>
      ) : (
        <em>
          You have {totalItems} list and {parseInt(completed)}% is completed👌
        </em>
      )}
    </footer>
  );
}
