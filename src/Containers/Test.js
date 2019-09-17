import React, { Component } from 'react';
import Popup from "reactjs-popup";

class Test extends Component {
    render() {
        return (
         
                 <div className="App">
      <h1>Create React Modal with 22 line of code </h1>
      <Popup modal trigger={<button>Click Me</button>}>
      { close =>(
          <div className="khongcare">
                <a className="close" onClick={close}>
             &times;
           </a>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at fermentum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In justo erat, consequat sed facilisis luctus, rutrum euismod arcu. Donec interdum nunc elit, quis venenatis lectus lacinia id. Fusce blandit urna tempus nisi efficitur dapibus. Praesent imperdiet scelerisque tincidunt. Pellentesque dictum gravida ipsum id vestibulum. Ut eget arcu malesuada, consequat dolor vitae, commodo ante. Vivamus ligula orci, tincidunt ac accumsan id, egestas vitae elit. Quisque porta, magna sit amet efficitur maximus, sapien nunc imperdiet nunc, ut laoreet ante nunc sit amet ligula. Phasellus a massa finibus, imperdiet lacus nec, iaculis erat. Fusce nec nibh ut arcu semper lacinia. Mauris sollicitudin tincidunt facilisis. Quisque in eleifend mi, dapibus vulputate purus.

</p>
          </div>
           
           
      )}
   
      </Popup>
    </div>
        
        );
    }
}

export default Test;