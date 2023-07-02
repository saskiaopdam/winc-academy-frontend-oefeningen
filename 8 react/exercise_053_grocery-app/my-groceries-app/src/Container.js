import React from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Milk" },
        { id: 2, title: "Bananas" },
        { id: 3, title: "Chocolate" },
        { id: 4, title: "Haring" },
      ],
      shoppingListItems: [
        { id: 1, title: "Milk", count: 1 },
        { id: 2, title: "Bananas", count: 1 },
        { id: 3, title: "Chocolate", count: 1 },
        { id: 4, title: "Haring", count: 1 },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.incrementAmountInCart = this.incrementAmountInCart.bind(this);
    this.addNewItemToCart = this.addNewItemToCart.bind(this);
  }

  incrementAmountInCart(prevState, id) {
    const index = prevState.shoppingListItems.findIndex(
      (item) => item.id === id
    );

    const newItems = [...this.state.shoppingListItems];

    const updatedItem = {
      ...newItems[index],
      count: newItems[index].count + 1,
    };
    newItems[index] = updatedItem;

    return {
      ...this.state,
      shoppingListItems: newItems,
    };
  }

  addNewItemToCart(shoppingListItem) {
    return {
      ...this.state,
      shoppingListItems: [...this.state.shoppingListItems, shoppingListItem],
    };
  }

  handleClickGroceryItem(id) {
    const clickedItem = this.state.groceryItems.filter(
      (item) => item.id === id
    );
    console.log(clickedItem);

    this.setState((prevState) => {
      const count = 1;
      const shoppingListItem = { ...clickedItem[0], count };

      console.log(prevState.shoppingListItems.some((item) => item.id === id));
      return prevState.shoppingListItems.some((item) => item.id === id)
        ? this.incrementAmountInCart(prevState, id)
        : this.addNewItemToCart(shoppingListItem);
    });
  }

  addGroceryItem(event, newItemTitle) {
    event.preventDefault();

    const newItem = {
      id: this.state.groceryItems.length + 1,
      title: newItemTitle,
    };
    newItemTitle !== "" &&
      this.setState({
        ...this.state,
        groceryItems: [...this.state.groceryItems].concat(newItem),
      });
  }

  emptyCart() {
    // console.log("empty cart button clicked");
    this.setState({ ...this.state, shoppingListItems: [] });
  }

  render() {
    return (
      <div>
        <GroceryList
          groceryItems={this.state.groceryItems}
          handleClickGroceryItem={this.handleClickGroceryItem}
          addGroceryItem={this.addGroceryItem}
        />
        <ShoppingCart
          shoppingListItems={this.state.shoppingListItems}
          emptyCart={this.emptyCart}
        />
      </div>
    );
  }
}

export default Container;
