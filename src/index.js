import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDIsplay"
import Spinner from "./Spinner"

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

    // Helper function; put conditionals here
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } 

        if(!this.state.errorMessage && this.state.lat) {
           return <SeasonDisplay lat = {this.state.lat} />
        }
        
        return <Spinner message = "Allow location request..." />
    }

    //Have to define render
    // You don't want conditionals in the render method.
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
            
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)