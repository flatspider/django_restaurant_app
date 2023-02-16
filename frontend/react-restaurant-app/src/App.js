import "./App.css";
import { useState, useEffect } from "react";
import MenuForm from "./components/MenuForm";
import CheckOut from "./components/CheckOut";

function App() {
  const [checkOutItems, setCheckOutItems] = useState("");
  const [menuSelection, setMenuSelection] = useState("a");

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      // What is the correct URL to use here?
      // Visiting the 8000/api_v1/foods/ url shows the list of food items.
      const response = await fetch("/api_v1/foods/");

      if (!response.ok) {
        console.log("error");
        throw new Error("Network request was not OK");
      }

      const data = await response.json();
      console.log("HELLOW");
      console.log({ data });
      setFoods(data);
    };
    getFoods();
  }, []);

  const placeCheckOutItemInCart = ({ items }) => {
    alert(items.description + " added to your cart.");
    const checkOutCopy = [...checkOutItems]; // This should be adding to an array.
    checkOutCopy.push(items);
    setCheckOutItems(checkOutCopy); // Not updating the state value.
    console.log(checkOutItems); // ID values are being added to state. I want the entire item added.
  };

  const removeItemFromCart = ({ items }) => {
    alert(items.description); // This returns a unique ID string.
    // Where should the check out live? The state should be passed to CheckOut.
    const checkOutCopy1 = [...checkOutItems]; // This should be adding to an array.
    // What does the button know? It can view the object it is attached to.
    // I want the button to splice out the array index it is currently at.
    let deleteIndex = checkOutCopy1.findIndex(
      (item) => item.description === items.description
    );
    console.log(deleteIndex);
    checkOutCopy1.splice(deleteIndex, 1);
    setCheckOutItems(checkOutCopy1); // Not updating the state value.
    console.log(checkOutItems); // ID values are being added to state. I want the entire item added.
  };

  return (
    <div className="App container mt-5">
      <header className="App-header">
        <div className="top-banner">
          <img src="https://static.wixstatic.com/media/a895db_d25ab21086c64ec89c658622a8248f2e~mv2.jpg/v1/fill/w_402,h_478,al_c,lg_1,q_80,enc_auto/brickstreetcafelogo.jpg" />
          <h1>
            Kitchen is open for lunch Tuesday - Saturday from 11am - 4pm
            ----------------------------- Cake Pick-Ups and Slices are available
            Tuesday - Saturday from 10am - 6:30pm TEST
          </h1>
        </div>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => {
            setMenuSelection("a");
          }}
        >
          Lunch Menu
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => {
            setMenuSelection("b");
          }}
        >
          Dessert Menu
        </button>
      </header>
      {menuSelection === "a" && (
        <MenuForm
          placeCheckOutItemInCart={placeCheckOutItemInCart}
          chooseMenu={"lunch"}
          foods={foods}
        />
      )}
      {menuSelection === "b" && (
        <MenuForm
          placeCheckOutItemInCart={placeCheckOutItemInCart}
          chooseMenu={"dessert"}
          foods={foods}
        />
      )}
      {menuSelection === "c" && (
        <CheckOut
          checkOutItems={checkOutItems}
          removeItemFromCart={removeItemFromCart}
        />
      )}

      <button
        className="btn btn-danger check-out-btn"
        onClick={() => {
          setMenuSelection("c");
        }}
      >
        Check Out
      </button>
    </div>
  );
}

export default App;
