import React from 'react'; // it allow us create react app that render to user
import ReactDOM from 'react-dom' // react dom is a function in react that has render propety
import App from './App'


/* // first argument what is element(h1 or div), 2nd - data that pass into element called props , 3rd - content in element
const element = React.createElement('h1',null,'hello world') */

/* // it take two argument 1st- element , 2nd - where to render
ReactDOM.render(element,document.getElementById('root'))
 */


// above we use basic javascript to create a element
// but what is the point of react in that we use jsx a class based type language

// using jsx
//const element = <h1>Hello world jsx</h1> // it is jsx

// list using without jsx
/* const element = React.createElement('ul',null,
                                    React.createElement('li',null,1),
                                    React.createElement('li',null,2),
                                    React.createElement('li',null,3))
 */

// list using jsx
const element = <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

//ReactDOM.render(element,document.getElementById('root'))

ReactDOM.render(<App/>,document.getElementById('root'))

