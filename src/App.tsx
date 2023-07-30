import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";

function App() {
  const cities = ["San Fransisco", "Narail", "Dhaka", "New York"];
  return (
    <div>
      <ListGroup items={cities} heading={"Cities"} />
      <Counter keys="c1" imgSrc="/vite.svg" />
      <Counter keys="c2" imgSrc="/react.svg" />
    </div>
  );
}

export default App;
