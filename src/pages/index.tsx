import React, { useState, useEffect } from "react"
import { addItem, removeItem } from '../store/actions';
import Layout from "../components/layout"
import SEO from "../components/seo"

//GraphQL
import { graphql } from "gatsby"

// Redux connect
import { connect } from 'react-redux';

// Local styles
import styles from '../sass/home.module.scss';

export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
        excerpt
      }
    }
  }
}
`
const Home = ({data, state, dispatch}) => {

  // Referenciar elmentos del DOM
  const container = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  // Hook para para detectar cuando el DOM cargó.
  const [load] = useState(0);

  useEffect(() => {
    console.log("DOM was charged");
    container.current.style.fontSize = '1.5rem';
  }, [load]);

  return (
    <Layout>
      <div ref={ container }>
      <SEO title="Home" />
        <h1 className={ styles.h1 }>Home</h1>
        <article>
          { data.allMarkdownRemark.edges.map(({node}) => (
            <section style={{ marginBottom: '40px'}}>
              <h2>{ node.frontmatter.title }</h2>
              <p>{ node.frontmatter.date }</p>
              { node.excerpt }
            </section>
          ))}
          <section style={{ marginBottom: '40px'}}>
          <button onClick={() => dispatch(addItem(state.counter + 1))}>Add item</button>
          <button onClick={ () => {
              if(state.counter > 0) {
                return dispatch(removeItem(state.counter - 1))
              }
            }
          }>Remove item</button>
          </section>
        </article>
        </div>
    </Layout>
  )
}

export default connect(state => ({
  state: state.reducer
}), null)(Home);
