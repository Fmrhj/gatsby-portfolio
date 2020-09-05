import '../../styles/styles.scss'

import { Link, graphql } from 'gatsby';

import Footer from "../components/footer"
import Header from '../components/header'
import { Helmet } from "react-helmet"
import MetaData from "../components/metaData"
import React from 'react';
import { kebabCase } from 'lodash';

const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group;

  return (
    <body>
      <div className="wrapper">
        <div className="container">
          <MetaData />
          <Header />
          <div className="blog-post-container">
            <div className="block-blog-post-wrapper">
              <Helmet title={`Fernando Zepeda - tags`} />
              <h1>Tags</h1>
              <ul>
                {allTags.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </body>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;