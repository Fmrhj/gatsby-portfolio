import { Link } from 'gatsby';
import React from 'react'
import { kebabCase } from 'lodash';

const tagStyle = {
    border: '0.5px',
    borderRadius: '7px',
    padding: '2px 6px',
    fontSize: '70%',
    fontFamily: '"Lucida Console", Courier, monospace',
    marginRight: '5px',
}

const Tags = ({ children }) =>

    children && (
        <ul style={{ marginBottom: 0, paddingLeft: 0, display: 'inline-flex' }}>
            {children.map(t => (
            <li key={t} style={tagStyle}> 
                <Link style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(t)}/`}>
                    {t}
                </Link></li>
            ))}
        </ul >
    )

export default Tags