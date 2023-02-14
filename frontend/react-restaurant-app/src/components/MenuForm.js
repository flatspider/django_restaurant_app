import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";

const MENU_ITEMS = [
  {
    id: nanoid(),
    description: "Sweet Potato Pie",
    price: "9",
    category: "dessert",
  },
  {
    id: nanoid(),
    description: "Sara's Coconut Cake",
    price: "9",
    category: "dessert",
  },
  {
    id: nanoid(),
    description: "24 Karot Cake",
    price: "9",
    category: "dessert",
  },
  { id: nanoid(), description: "Ham Sandwich", price: "3", category: "lunch" },
  {
    id: nanoid(),
    description: "Tomato Dill Soup",
    price: "6",
    category: "lunch",
  },
  {
    id: nanoid(),
    description: "Veggie Quiche",
    price: "14",
    category: "lunch",
  },
  { id: nanoid(), description: "Biscuit", price: "4", category: "lunch" },
  {
    id: nanoid(),
    description: "Seared Salmon Salad",
    price: "15.50",
    category: "lunch",
  },
  {
    id: nanoid(),
    description: "Shrimp Louie Salad",
    price: "15",
    category: "lunch",
  },
  {
    id: nanoid(),
    description: "Mom's Spaghetti & Meat Sauce",
    price: "15",
    category: "lunch",
  },
  {
    id: nanoid(),
    description: "Shrimp & Grits",
    price: "15.50",
    category: "lunch",
  },
];

// I do not want to add items to my LunchItems array.
// I want to add them to a new check out array.
// Look for a value to be passed in.
function MenuForm({ placeCheckOutItemInCart, chooseMenu, removeItemFromCart }) {
  const filteredArray = MENU_ITEMS.filter(
    (item) => item.category === chooseMenu
  );

  // Above function filters the full menu-items array according to the item.category that was selected.

  const lunchHTML = filteredArray.map((item) => (
    <MenuItem
      items={item}
      removeButton={false}
      placeCheckOutItemInCart={placeCheckOutItemInCart}
      key={item.id}
      removeItemFromCart={removeItemFromCart}
    />
  ));

  return (
    <div>
      <table>
        <tr>
          <th>Description</th>
          <th>Price</th>
        </tr>
        {lunchHTML}
      </table>
    </div>
  );
}

export default MenuForm;
