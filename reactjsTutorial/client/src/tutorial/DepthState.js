import React,{Component} from 'react'

export default class App extends Component{
    state = {
        counter : 0,
        name : 'bob',
        person : {firstName : 'satish' , lastName : 'pradhan'}
    }
    updateState = () =>{
        const {person} = this.state
        this.setState({name :'peter'})
        //this.setState({person : {firstName : 'sana'}})
        this.setState({person: {...person,firstName:'billy'}})
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <hr/>
                <h1>App Component</h1>
                <button onClick={this.updateState}>click me</button>
            </div>
        )
    }
}