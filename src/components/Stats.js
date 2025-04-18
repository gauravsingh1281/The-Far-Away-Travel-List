export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list. 🚀</em>
      </p>
    );
  const itemsNum = items.length;
  const packedItemNum = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItemNum / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go ✈️`
          : `💼 You have ${itemsNum} items on your list, and you already packed 
        ${packedItemNum} (${!isNaN(percentage) ? percentage : 0}%)`}
      </em>
    </footer>
  );
}
