import React, { Component } from "react"

interface DataFooter {
    copyright: string
}

class Footer extends Component<DataFooter> {

    render() {
        const { copyright } = this.props;
        return(
            <footer style={{ textAlign: 'center' }}>
               <small>{ copyright }</small>
            </footer>
        )
    }      
}

export default Footer;
