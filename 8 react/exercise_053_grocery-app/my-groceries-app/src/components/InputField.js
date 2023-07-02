import React from "react";

class InputField extends React.Component {
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      newItemTitle: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearInputField = this.clearInputField.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      newItemTitle: event.target.value,
    });
  }

  clearInputField() {
    this.setState({
      newItemTitle: "",
    });
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.props.addGroceryItem(event, this.state.newItemTitle);
          this.clearInputField();
        }}
      >
        <input
          type="text"
          placeholder="add new grocery item"
          value={this.state.newItemTitle}
          onChange={this.handleInputChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default InputField;
