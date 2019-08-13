import React, { Component } from 'react';

class Test extends Component {
  constructor(props, context) {
    super(props, context);
    
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    //  extract the node list from the form
    //  it looks like an array, but lacks array methods
    const { pet } = this.form;

    // convert node list to an array
    const checkboxArray = Array.prototype.slice.call(pet);

    // extract only the checked checkboxes
    const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    console.log('checked array:', checkedCheckboxes);

    // use .map() to extract the value from each checked checkbox
    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
    console.log('checked array values:', checkedCheckboxesValues);
    this.setState({
      preferDay:checkedCheckboxesValues
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          ref={form => this.form = form}>
          <label>
            Cat
            <input type="checkbox" value="cat" name="pet" />
          </label>
          <label>
            Dog
            <input type="checkbox" value="dog" name="pet" />
          </label>
          <label>
            <input type="checkbox" value="ferret" name="pet" />
             Ferret
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Test;