import { Component } from 'react'; 
import Cars from './components/Cars'


class App extends Component {

  state = {
    teslas: [
      {
        name: "Model Y", 
        price: '100000', 
        img: '/autos/ModelY.png'
      }, 
      {
        name: "Roadster", 
        price: '200000', 
        img: '/autos/roadster.png'
      },
      {
        name: 'Model 3', 
        price: '20000', 
        img: 'autos/fond.jpg'
      }
    ]
  }

  render() {
    return (
      <div>
        <Nav />
        <Cars 
          teslas = {this.state.teslas}
        /> 
      </div>
    )
  }
}

export default App;
