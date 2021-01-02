import React,{Component} from 'react'
/* import LectureStyle from './tutorial/LectureStyle'
import IntroState from './tutorial/IntroState'
 */import DepthState from './tutorial/DepthState'


//import React from 'react' // for the first export type

/* class App extends React.Component{
    render(){
        return <h1>hello using the Component</h1>
    }
}

export default App; */

// another way of export 
/* class App extends Component{
    render(){
        return <h1>hello using the Component component</h1>
    }
}

export default App; */

// another way of export 
export default class App extends Component{
    // we can't define function in render function but we can invoke using this
    add(n1,n2){
        return n1 + n2
    }
    multipy(n1,n2){
        return n1 * n2
    }
    someJsx(){
        const someArr = [<li key='1'>1</li>,<li key='2'>2</li>,<li key='3'>3</li>]
        return(
            <ul>
                {//<li>1</li>
    }           {someArr}
            </ul>
        )
    }
    conditionRender(){
        if(1>0){
            return(
                <h1>1 is greater than 0</h1>
            )
        }
        else{
            return (
                <h1>1 is less than 0</h1>
            )
        }
    }
    render(){
        const num1 = 1
        const num2 = 3
        const someObj = {name:'satish', age : 1000}
        return (
        <div>
            <h1>hello using the Component using default in class</h1>
            <h3>hello using h3</h3>
            <h3>{ 1 + 1 }</h3>
            <h3>{num1 + num2}</h3>
            <h1>{'satish' + 124}</h1>
            <h1>{new Date().toLocaleString()}</h1>
            <h1>{this.add(1,3)}</h1>
            <h1>{this.multipy(1,3)}</h1>
            <h1>some objects </h1>
            <h3>{someObj.name + " "+someObj.age}</h3>
            <h4>{this.someJsx()}</h4>
            {3>2 ? '3 is bigger than 2 ': 'its not'}
            {true && <h1>thing i want to render</h1>}
            {this.conditionRender()}
{/*             <LectureStyle isError = {false}/>
            <IntroState/>
 */}            <DepthState/>
        </div>
        )
    }
}
