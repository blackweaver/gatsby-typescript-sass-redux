import React from "react"
import { Link } from "gatsby"

// Redux
import { connect } from 'react-redux';
import { addItem, removeItem } from '../store/actions';

import Layout from "../components/layout"

const Home = ({state, dispatch}) => (
  <Layout>
    <h1>Home</h1>
    <div>
        <button onClick={() => dispatch(addItem(state.counter + 1))}>Add item</button>
        <button onClick={ () => {
            if(state.counter > 0) {
              return dispatch(removeItem(state.counter - 1))
            }
          }
        }>Remove item</button>
      </div>
  </Layout>
)

export default connect(state => ({
  state: state.reducer
}), null)(Home);
