import { createElement, render, Component } from "./toy-react";

class MyComponent extends Component{
  render(){
      return (
         <div>
            <h1>My Component</h1>
            {this.children}
         </div>
      )
  }
}


render(<MyComponent id="a" class="c">
    <h1>lalala</h1>
    <p>haha</p>
</MyComponent>,document.body)
