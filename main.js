import { createElement, render, Component } from "./toy-react";

class MyComponent extends Component{
    constructor(){
        super()
        this.state = {
            a:1,
            b:2
        }
    }

    render(){
        return (
            <div>
                <h1>My Component</h1>
                <span>{this.state.a.toString()}</span>
                <span>{this.state.b.toString()}</span>
                <button onclick={() => { this.setState({a:this.state.a + 1}) }}>add</button>
            </div>
        )
    }
}


render(<MyComponent id="a" class="c">
    <h1>lalala</h1>
    <p>haha</p>
</MyComponent>,document.body)
