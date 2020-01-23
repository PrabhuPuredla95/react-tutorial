import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props) {
         super(props);

        this.state={lat: null, err: null}

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({lat: 0})
                console.log("2");
            },
            (error) => {
                console.log(error)
                this.setState({err: error.message})
            }
        );
    }
    render (){
        console.log("1");
        if(!this.state.err && this.state.lat)
            return <div>Latitude: {this.state.lat}</div>
        if(this.state.err && !this.state.lat)
            return <div>Error: {this.state.err}</div>
        return <div>Loading ...</div>
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));