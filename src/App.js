import { Component } from 'react'; 
import Cars from './components/Cars'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

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
    ], 
    carritoCompras: [], 
  }

  agregarAlCarro = (producto) => {
    return this.setState({
      carritoCompras: this.state.carritoCompras.concat({
        ...producto, 
        cantidad: 1,
      })
    })
  }

  render() {
    console.log(this.state.carritoCompras)
    return (
      <div>
        <Navbar />
          <Layout>
            <Title />
            <Cars 
              teslas = {this.state.teslas}
              agregarAlCarro = {this.agregarAlCarro}
            /> 
          </Layout> 
      </div>
    )
  }
}

export default App;
