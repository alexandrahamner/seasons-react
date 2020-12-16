import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // to initialize our state object
    constructor (props) {
        //necessary
        super(props);

        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            // Callback #1 = Success Callback; everything goes as planned
            (position) => {
                //to update our state, we call setSatelo
                this.setState({ lat: position.coords.latitude });
            },
            // Failure callback; get current position is unable to determine position.
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }
    //Have to define render
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } 

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        
        return <div>Loading!</div>

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)