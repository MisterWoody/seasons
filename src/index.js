import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    
    // Note the statement below works due to babel
    state = { lat: null, errMessage: '' };
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner />;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

