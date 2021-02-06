import { Link } from 'gatsby';
import React from "react"
import { kebabCase } from 'lodash';

const Tags = ({ children }) =>

    children && (
        <ul style={{ marginBottom: 0, paddingLeft: 0, display: "inline-flex" }}>{children.map(t => (
            <li key={t} style={{
                border: "0.5px",
                borderRadius: "7px",
                backgroundColor: "#d3d3d3",
                padding: "2px 6px",
                fontSize: "70%",
                marginRight: "5px",
            }}> <Link style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(t)}/`}>{t}</Link></li>
        ))}</ul >
    )

export default Tags

/***
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
<Link style={{ textDecoration: 'none' }

 }
***/