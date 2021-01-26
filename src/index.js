import React from 'react';
import ReactDOM from 'react-dom';
import SucursalDisplay from './SucursalDisplay';

class App extends React.Component {

  constructor(){
    super();
    this.state = { lat: "", lon: "", errorMessage: "" };
  }


componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }),
    err => this.setState({ errorMessage: err.message })
  );
   
}

render() {
  if (this.state.errorMessage && !this.state.lat) {
    return <div>Error: {this.state.errorMessage}</div>;
  }
  if (!this.state.errorMessage && this.state.lat) {
    return <SucursalDisplay lat={this.state.lat} lon={this.state.lon}/>
  }
  return <div>Loading...</div>;
}

}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);