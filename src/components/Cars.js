import { Component } from "react"
import Car from './Car'

const styles = {
    cards: {
        display: 'flex', 
        justifyContent: 'space-around',
        maxWidth: '1200px', 
        margin: 'auto',
        marginTop:'20px',
    }
}

class Cars extends Component {
    render() {
        const { teslas } = this.props
        return (
            <div style={styles.cards}>
                {teslas.map(tesla => 
                    <Car 
                        tesla = {tesla}
                        key = {tesla.name}
                    />    
                )}
            </div>
        )
    }
} 

export default Cars