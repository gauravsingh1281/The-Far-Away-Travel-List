const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "Water Bottle", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <>
      <h1>🌴 Far Away 💼</h1>
    </>
  );
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip ?</h3>
    </div>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Items item={item} />
        ))}
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already X (X%)</em>
    </footer>
  );
}
function Items({ item }) {
  return (
    <li>
      <span
        style={
          item.packed ? { color: "lime", textDecoration: "line-through" } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
