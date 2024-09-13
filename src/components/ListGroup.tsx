// import { MouseEvent } from "react";
import { useState } from "react";

/* 
Props: input passed to a component, similar to function args, immutable  
State: data managed by a component, more like local variable(s), mutable
Both cause the DOM to re-render when changed
*/

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  /* Hook, a function that allows us to tap in to built in features in React. useState allows us to tell React that this component can have data or state that may change.
   */
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /* As updater function updates variable, React will be notified that the state of the compenent has changed and so will re-render, updating the DOM under the hood.
   */
  // NOTE: Components have independent states

  // const getMessage = () => (items.length === 0 ? <p>No items found</p> : null);

  // const handleClick = (event) => console.log(event);

  /* ^^ Parameter 'event' implicitly has an 'any' type. ^^ 
  Typescript compiler does not know the type of 'event' - should specify type of parameter so dot operator ('.') shows autocompletion and we ensure type-safety
  This does not occur in the block of JSX below because the event is typed as 'React.MouseEvent<HTMLLIElement, MouseEvent>'
  */

  // Event handler with type annotation:
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      {/* ^^ dynamic content rendering ^^ */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(`Item ${index}: ${item}`)}
            // ^^ will log custom String ^^
            // onClick={(event) => console.log(event)}
            // ^^ will log SyntheticBaseEvent object ^^
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
