import { useState } from "react";

interface Props {
  items: String[];
  heading: String;
}
function ListGroup({ items, heading }: Props) {
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item</p>}
      <ul className="list-group">
        {items.map((city, i) => (
          <li
            className={
              activeIdx === i ? "list-group-item active" : "list-group-item"
            }
            key={i}
            onClick={() => setActiveIdx(i)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
