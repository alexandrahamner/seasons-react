import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor (props) {
        //necessary
        super(props);

        this.state = {};
    }
    //Have to define render
    render() {
        window.navigator.geolocation.getCurrentPosition(
            // Callback #1 = Success Callback; everything goes as planned
            (position) => console.log(position), 
            // Failure callback; get current position is unable to determine position.
            (err) => console.log(err)
        );
        return <div>Latitude: </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)