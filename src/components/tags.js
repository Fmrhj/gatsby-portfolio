import { Link } from 'gatsby';
import React from "react"
import { kebabCase } from 'lodash';
import styles from '../../styles/styles.scss'

const Tags = ({ children }) =>

    children && (
        <ul>{children.map(t => (
            <li key={t}> <Link to={`/tags/${kebabCase(t)}/`}>{t}</Link></li>
        ))}</ul >
    )

export default Tags
