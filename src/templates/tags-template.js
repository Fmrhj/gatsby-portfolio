// style
import '../../styles/styles.scss';

import { Link, graphql } from 'gatsby';

import Footer from "../components/footer"
import Header from '../components/header'
import { Helmet } from "react-helmet"
import MetaData from "../components/metaData"
import React from 'react';

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? '' : 's'
        } tagged with "${tag}"`;
    return (
        <div className="wrapper">
            <MetaData />
            <Header />
            <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <Helmet title={`Fernando Zepeda - ${tagHeader}`} />
                <h1>{tagHeader}</h1>
                <ul>
                    {edges.map(({ node }) => {
                        const { title, date } = node.frontmatter;
                        const { slug } = node.fields;
                        return (
                            <li key={slug}>
                                <Link to={node.frontmatter.path}>
                                    {title} ({date}) </Link>
                            </li>
                        );
                    })}
                </ul>
                <Link to="/tags">All tags</Link>
            </div>
            <br></br>
            <Footer />
        </div >
    );
};

export default Tags;

export const pageQuery = graphql`
    query($tag: String) {
                    allMarkdownRemark(
                        limit: 2000
        sort: {fields: [frontmatter___date], order: DESC }
        filter: {frontmatter: {tags: { in: [$tag] } } }
      ) {
                    totalCount
        edges {
                    node {
                    fields {
                    slug
                }
            frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `;