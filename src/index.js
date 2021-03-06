import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    
    // Note the statement below works due to babel
    // which under the covers creates a constructor
    
    state = { lat: null, errMessage: '' };
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage: err.message })
        );
    }
    
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please allow location access..."/>;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

