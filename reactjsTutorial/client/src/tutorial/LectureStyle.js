import React,{Component} from 'react'
import '../css/LectureStyle.css'
import style from '../css/example.module.css'

export default class App extends Component{
    render(props){
        const exampleStyle = {
            fontStyle : "italic",
            fontSize : "50px",
            backgroundColor : "yellow"
        }
        const generateCss = () => {
            return this.props.isError ? style.error : style.success
        }
        return(
            <div>
                <hr/>
                <h1 style={exampleStyle}>the lecture component</h1>
                <p style={{fontStyle : "italic"}}> the inline style in react</p>
                <h3 className="example increaseFont">The class based css in react</h3>
                <h3 className={style.success}>the module based css</h3>
                <h3 className={generateCss()}>invoce generete css : {this.props.isError}</h3>
            </div>
        )
    }
}