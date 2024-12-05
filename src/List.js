import React from "react";

function List(props) {
  const deleteItemFromList = (key) => {
    const updatedList = props.itemList.filter((item) => item.key !== key);
    props.updateItemList(updatedList); // Ensure the `updateItemList` function is passed via props
  };

  return (
    <div>
      {props.itemList.map((itemObj) => (
        <div key={itemObj.key} className="item">
          <button onClick={() => deleteItemFromList(itemObj.key)}>x</button>
          <p>{itemObj.item}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
