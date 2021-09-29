import { Component } from "react";


const styles = {
    layout: {
        color: '#0a283e', 
        alignItem: 'center', 
        display: 'flex', 
    },
    container: {
       width: '1200px', 
       margin: 'auto'
    }
} 
class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Layout 