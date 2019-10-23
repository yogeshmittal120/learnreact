import React,{Component} from "react";
class Button extends Component{
    render(){
        return <button>MY {this.props.name}</button> 
    }
}
export default Button;