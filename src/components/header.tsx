import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Redux
import { connect } from 'react-redux';

// Los componentes de función capturan los valores renderizados, no tienen estado ni ciclos de vida
const Header = ({ siteTitle, state }) => (
  <header>
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="counter">Items: { state.counter }</div>
    <nav>
      <ul>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/about" activeClassName="active">About us</Link></li>
        <li><Link to="/services" activeClassName="active">Services</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default connect(state => ({
  state: state.reducer
}), null)(Header);
