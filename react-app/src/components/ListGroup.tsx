import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";    1️⃣

// function ListGroup() {
// With the Help of Fragment we are able to wrap our component since we cannot
// pass more than one element in our component.
//   return (
//     <Fragment>
//       <h1>List Group</h1>
//       <ul className="list-group">
//         <li className="list-group-item">An item</li>
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </Fragment>
//   );
// }

function ListGroup() {
  let cities = ["New York", "London", "Texas", "Tokyo", "Lagos"];
  // cities = []
  //     Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);  1️⃣
  //       Variable    |   Updater function
  const [selectedIndex, setSelectedIndex] = useState(-1); 
  // useState: Also known as a Hook. Using the useState hook, this is to tell React
  // that this component can have data or state that will change over time
  // A Hook is a functions that allows us to tap into built-in features in React.
  // Using the UpdaterFunction, we can update the Variable and at that point React will
  // be notified so it knows that the state of our component is changed and then it will
  // re-render our component which causes the DOM to be updated under the hood.

  // if (cities.length === 0) {
  /* One of the ways to optimize this line of code without repition*/
  //     return (
  //       <>
  //         <h1>List Group</h1>
  //         <p>Item Not Found</p>
  //       </>
  //     );

  // }
  return (
    <Fragment>
      <h1>List Group</h1>
      {/* {cities.length === 0 ? <p>Item Not Found!</p> : null}  OR */}
      {cities.length === 0 && <p>Item Not Found!</p>}
      <ul className="list-group">
        {
          // In JSX we do not have the "for" loop to help us loop through the
          // elements in an array instead we use another technique.
          // In array we have a method called 'map' which enables us to convert or map
          // each item to an item of different type
          cities.map((city, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              //   onClick={handleClick}   1️⃣
              onClick={() => setSelectedIndex(index)}
              key={city}
            >
              {city}
            </li>
          ))
        }
      </ul>
    </Fragment>
  );
}

export default ListGroup;
