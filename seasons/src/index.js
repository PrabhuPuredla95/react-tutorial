import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import  Spinner from './Spinner'
class App extends React.Component{

    state={lat: null, err: null}// babel compiles this into constructor
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            (error) => {
                this.setState({err: error.message})
            }
        );
    }
    componentDidUpdate(){
        console.log("Component updated")
    }
    render (){
        if(!this.state.err && this.state.lat)
            return <SeasonDisplay lat = {this.state.lat} />
        if(this.state.err && !this.state.lat)
            return <div>Error: {this.state.err}</div>
        return <Spinner message="Please accept location request"/>
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));