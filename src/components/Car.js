import { Component } from "react";
import Button from './Button'

const styles = {
    img: {
        width: '100%',     
    },
    card: {
        width: '25%',
        height: 'auto', 
        boxShadow: '0px 2px 17px -8px rgba(0,0,0,0.75)',
        position: 'relative', 
        borderRadius: '5px',
        border: '1px solid #eee'
    }
    ,title: {
        textAlign: 'center' ,
        fontSize: '1.4rem', 
        textTransform: 'uppercase'     
    },
    cimg: {
        overflow: 'hidden', 
        height: '200px', 
        width: '100%'
    }, 
    p: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
}

class Car extends Component {
    render() {
        const { tesla, agregarAlCarro } = this.props
        return (
            <div style={styles.card}>
                <h3 style={styles.title}>{tesla.name}</h3>
                <div style={styles.cimg}>
                    <img alt={tesla.name} src={tesla.img} style={styles.img} />
                </div>
                <p style={styles.p}>{tesla.price}$</p>
                <Button onClick={() => agregarAlCarro(Car)}>
                    Agregar a la compra
                </Button>
            </div>
        )
    }
}

export default Car 