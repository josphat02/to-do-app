
import React, { useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    if (currentItem) {
      updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
      setCurrentItem(""); // Clear the input field after adding an item
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="wrapper">
          <div className="input-wrapper">
            <input value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </div>
    </div>
  );
}

export default App;
  
  





