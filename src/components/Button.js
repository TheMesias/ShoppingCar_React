import { Component } from "react";

const styles = {
    button: {
        padding: '10px 15px',
        textTransform: 'Uppercase', 
        border: "none", 
        cursor: 'pointer', 
        borderRadius: '5px', 
        backgroundColor: '#FF577F', 
        color: '#FFF'
    }, 
    cbutton: {
        width: "100%", 
        textAlign: 'center',
        margin: '10px 0'
    }
}

class Button extends Component {
    render() {
        return (
            <div style={styles.cbutton}>
                <button style={styles.button}>{this.props.children}</button>
            </div>
        )
    }
}

export default Button