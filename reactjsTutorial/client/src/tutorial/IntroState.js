import React,{Component} from 'react'
//import Child from './Child'
export default class App extends Component{
/*     constructor(props){
        super(props);
        // by using the contructor and super we can use the this.props and this.state
        this.state = {counter : 0}
        this.increaseCounter = this.increaseCounter.bind(this)

    }    
    increaseCounter(){
        this.setState({counter : this.state.counter + 1})
    } */
    // lot of people don't like the constructor way of define instead of use direct class
    state = {counter : 0}
    increaseCounter = (num)=>{
        this.setState({counter : this.state.counter + num})
    }
    render(){
        return(
            <div>
                <hr/>
                <h2>Counter</h2>
                <h2>{this.state.counter}</h2>
{/*                 <button onClick = {() => {this.setState({counter : this.state.counter + 1})}}>Update Counter</button>
                <button onClick = {this.increaseCounter.bind(this)}>Update Counter 2</button>
                <button onClick = {this.increaseCounter}>Update Counter 3</button>
 */}
                <Child increaseCounter={this.increaseCounter}/>
             </div>
        )
    }
}
const Child = ({increaseCounter}) => {
    return(
        <div>
            <h1>child Component</h1>
{/*             <button onClick= {increaseCounter}>click here</button>
 */}            <button onClick={() => {increaseCounter(5)}}>click</button>
                <button onClick={increaseCounter.bind(this,10)}>click</button>
        </div>
    )
}