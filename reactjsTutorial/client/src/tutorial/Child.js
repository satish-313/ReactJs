import React,{Component} from 'react'

export default class App extends Component{
    render({increaseCounter}){
        return(
            <div>
                <button onClick = {increaseCounter}>update</button>
            </div>
        )
    }
}