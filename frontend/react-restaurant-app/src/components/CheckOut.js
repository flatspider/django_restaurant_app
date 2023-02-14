import MenuItem from "./MenuItem";

function CheckOut({ checkOutItems, removeItemFromCart }) {
  // Check out items is an array of objects.

  let subtotalHTML = ""; // add all of the prices listed in the cart.
  let subtotal = 0;
  let checkOutHTML = <p>Hello</p>;

  for (let i = 0; i < checkOutItems.length; i++) {
    subtotal = parseInt(subtotal) + parseInt(checkOutItems[i].price);
  }

  subtotalHTML = subtotal;

  if (checkOutItems === []) {
    checkOutHTML = <p>There is nothing currently in your cart.</p>;
  } else {
    checkOutHTML = checkOutItems.map((item) => (
      <div>
        <MenuItem
          items={item}
          key={item.id}
          removeButton={true}
          removeItemFromCart={removeItemFromCart}
        />
      </div>
    ));
  }

  return (
    <div>
      <p>TIME TO PAY FOR FOOD</p>
      {checkOutHTML}
      <h3>Your current subtotal is: ${subtotalHTML}</h3>
    </div>
  );
}

export default CheckOut;
