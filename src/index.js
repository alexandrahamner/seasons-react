import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDIsplay"

class App extends React.Component {
    // State Initialization: Equivalent to creating a constructor.
    state = { lat:null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // Callback #1 = Success Callback; everything goes as planned
            (position) => this.setState({ lat: position.coords.latitude }),
            // Failure callback; get current position is unable to determine position.
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    //Have to define render
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } 

        if(!this.state.errorMessage && this.state.lat) {
           return <SeasonDisplay lat = {this.state.lat} />
        }
        
        return <div>Loading!</div>

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)