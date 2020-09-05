import { Link } from 'gatsby';
import React from "react"
import { kebabCase } from 'lodash';

const Tags = ({ children }) =>

    children && (
        <ul>{children.map(t => (
            <li key={t}> <Link to={`/tags/${kebabCase(t)}/`}>{t}</Link></li>
        ))}</ul >
    )

export default Tags
