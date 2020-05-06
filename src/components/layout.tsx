import React from "react"
import PropTypes from "prop-types"

// Redux
import { connect } from 'react-redux';
import { toggleDarkMode } from '../store/actions';

import Header from "./header"
import Footer from "./footer"
import "../sass/layout.scss"

const Layout = ({ children, state, dispatch }) => {

  return (
    <div className="wrapper"
      style={ state.isDarkMode ? { background: '#A65A49', color: '#F2CBBD' } : null}
    >
      <Header siteTitle="Gatsby + Redux" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <button
          onClick={() => dispatch(toggleDarkMode(!state.isDarkMode))}
        >Dark Mode {state.isDarkMode ? 'on' : 'off'}</button>
      </div>
      <Footer copyright="Gatsby + Redux + el gorrión" />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(state => ({
  state: state.reducer
}), null)(Layout);
