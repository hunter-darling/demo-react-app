import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Message from "./Message";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";
import DemoButton from "./components/DemoButton";

function App() {
  // const [count, setCount] = useState(0);
  // let items = ["New York", "San Francisco", "Paris", "Amsterdam", "Tokyo"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="App">
      {/* <div>
        <Message />
      </div>
      <div>
        <Alert>
          Hello <span>World!</span>
        </Alert>
      </div> */}
      {/* <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <button onClick={() => setCount((count) => 0)}>Reset Count</button>
      </div> */}
      {/* <div>
        <MyButton buttonLabel="My Button!" />
      </div> */}
      <div>
        <DemoButton onClick={() => setAlertVisibility(true)}>
          Demo Button!
        </DemoButton>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>Demo Alert!</Alert>
        )}
      </div>
    </div>
  );
}

export default App;
