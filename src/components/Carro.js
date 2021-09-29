import { Component } from "react";
import BubbleAlert from './BubbleAlert'
const styles = {
    carro: {
        backgroundColor: '#359a2c', 
        color: '#fff', 
        borderRadius: '15px', 
        cursor: 'Pointer', 
        border: 'none', 
        padding: '15px'
    }, 
    bubble:{
        position: 'relative', 
        left: '12px', 
        top: '20px'
    } 
}

class Carro extends Component {
    

    render() {
        return (
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert value={9} /> 
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro