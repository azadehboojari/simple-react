import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

//class-based component
class App extends React.Component {
    //constructor() function is the very first function that is be called when a class be created
    //states needs to be define in constroctor function
    // constructor(props) {
    //     //super is a refrence to the parents constructor function
    //     super(props);
    //     //this is the only time we do direct assignment to this.state
    //     this.state={ lat: null, errorMessage: ''};
        // window.navigator.geolocation.getCurrentPosition(
        //     // its not gonna work imidiatly, using 2 call backs to make it quick
        //     (position) => {
        //         //we called setState, setState the only function to 
        //         //update the state
        //         this.setState({lat: position.coords.latitude});

        //         //we DO NOT DO THIS
        //         //this.state.lat=position.coords.latitude;
        //     },
        //     (err) => { this.setState({errorMessage: err.message})
                
        //     }
        //     );
    // }
    //react says we have to define render
    state = {lat: null, errorMessage: ''};
    componentDidMount (){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
            );

    }
    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div> 
        }
        if (!this.state.errorMessage && this.state.lat){
           return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner />
    }
    render(){
        return(
            <div className="border red">
                {this.renderContent()}      
            </div>
        )
   
        
    }
    
}
ReactDOM.render(
    <App />, document.querySelector('#root')
)