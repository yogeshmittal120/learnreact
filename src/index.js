import React,{Component,Fragment} from "react";
import ReactDOM from 'react-dom';
import Btn from "./Button";
import Fbtn from "./functionalCompEx";
class App extends Component{
    // different way to return the elements in a container
    // render(){
    //     return <React.Fragment>   // This is provide container but its not create as a container
    //     <Btn name="Submit" /> 
    //     <Btn name="Open" />
    //     <Btn name="Close" />
    //     <Btn name="right"/>
    //     </React.Fragment>;    
    // }
    // render(){            // This is provide container element div ant its also contains no of elemnents or render as a single object;
    //     return <div>
    //     <Btn name="Submit" /> 
    //     <Btn name="Open" />
    //     <Btn name="Close" />
    //     <Btn name="right"/>
    //     </div>;    
    
    // }

    render(){ //when we use only Fragment tag then we need to declare or import above 
        return <Fragment> 
        <Btn name="Class Component" /> 
        <Fbtn name="Functional Component " />
        </Fragment>;    
    }

    // render(){ // this is new way to render of collection of elements but this is not supported some browser so its not recommded
    //     return <>
    //     <Btn name="Submit" /> 
    //     <Btn name="Open" />
    //     <Btn name="Close" />
    //     <Btn name="right"/>
    //     </>;    
    // }

}
// let el=<button>Submit</button>;
ReactDOM.render(<App />,document.getElementById('root'));