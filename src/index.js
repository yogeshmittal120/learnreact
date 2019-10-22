import React,{Component} from "react";
import ReactDOM from 'react-dom';
class App extends Component{
    render(){
        return <button>Submit</button>;
    }
}
// let el=<button>Submit</button>;
ReactDOM.render(<App />,document.getElementById('root'));
