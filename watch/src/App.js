import React from 'react';

class App extends React.Component {
    timenow = new Date().toLocaleString();
    state = { currentTime: this.timenow };

    componentDidMount = () => {

      setInterval(() => this.setState({ currentTime: new Date().toLocaleString() }), 1000);
     
    }

    render() {
        return (<div>
            Time is {this.state.currentTime}
        </div>);
    }
}

export default App;