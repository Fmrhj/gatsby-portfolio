import { Link, graphql } from 'gatsby';

import React from "react"
import { kebabCase } from 'lodash';

const Tags = ({ children }) =>
    children && (
        <ul style={{ marginBottom: 0, marginLeft: "-35px", display: "inline-flex" }}>
            {children.split(", ").map(t => (
                <li
                    key={t}
                    style={{
                        borderRadius: `5px`,
                        border: `1px grey`,
                        padding: `2px 6px`,
                        marginRight: `5px`,
                        fontSize: `70%`,
                        backgroundColor: "#D8CACA",
                        color: "white",
                        listStyle: "none",
                        textDecoration: "none"
                    }}>
                    <Link style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(children)}/`}>{t}</Link>
                </li>
            ))}
        </ul >
    )

export default Tags
