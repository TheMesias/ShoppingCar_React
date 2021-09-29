import { Component } from "react"
import Car from './Car'

const styles = {
    cards: {
        display: 'flex', 
        justifyContent: 'space-between',
    }
}

class Cars extends Component {
    render() {
        const { teslas, agregarAlCarro } = this.props
        return (
            <div style={styles.cards}>
                {teslas.map(tesla => 
                    <Car 
                        tesla = {tesla}
                        key = {tesla.name}
                        agregarAlCarro = {agregarAlCarro}
                    />    
                )}
            </div>
        )
    }
} 

export default Cars