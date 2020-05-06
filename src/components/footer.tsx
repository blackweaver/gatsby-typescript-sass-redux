import React, { Component } from "react"

// Redux
import { connect } from 'react-redux';

interface DataFooter {
    copyright: string
    state: {
        counter: number,
    }
}

// Footer con componente de clase
class Footer extends Component<DataFooter> {

    constructor(props) {
        super(props);
    }

    render() {
        const { copyright, state } = this.props;
        return(
            <footer style={{ textAlign: 'center' }}>
                <div className="counter">Items: { state.counter }</div>
               <small>{ copyright }</small>
            </footer>
        )
    }      
}

export default connect(state => ({
    state: state.reducer
  }), null)(Footer);
