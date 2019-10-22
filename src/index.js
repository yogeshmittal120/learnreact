import React,{Component} from "react";
import ReactDOM from 'react-dom';
import Btn from "./Button";
class App extends Component{
    render(){
        return <div>
        <Btn>Submit</Btn> 
        <Btn>Open</Btn>
        <Btn>Close</Btn>
        <Btn>right</Btn>
        </div>;    
    }
}
// let el=<button>Submit</button>;
ReactDOM.render(<App />,document.getElementById('root'));