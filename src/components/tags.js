import { Link, graphql } from 'gatsby';

import React from "react"
import { kebabCase } from 'lodash';
import styles from '../../styles/styles.scss'

const Tags = ({ children }) =>

    children && (
        <ul style={{ display: 'inline-flex', marginRight: '-55px' }}>
            {children.map(t => (
                <li
                    key={t}
                    style={{
                        border: `1px grey`,
                        padding: `0px 10px`,
                        fontSize: `70%`,
                        textDecoration: "none",
                        listStyle: "none",
                        backgroundColor: "#D8CACA",
                        borderRadius: "5px",
                        marginRight: "2px",
                        ":hover": {
                            border: "2px dashed darkred"
                        }
                    }}>
                    <Link style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(t)}/`}>{t}</Link>
                </li>
            ))}
        </ul >
    )

export default Tags
