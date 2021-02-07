import '../../styles/styles.scss';

import Link from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant='body2' color='white'>

            <Link color='inherit' href={`${process.env.SITE_URL}`}>
                {process.env.SITE_NAME}
            </Link>{' © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '30vh',
    },
    footer: {
        left: '100px',
        marginTop: 'auto',
        backgroundColor: '#090a0b',

    },
    footer_content: {
        fontSize: '0.8rem',
        color: '#fff'
    }
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className='container'>
                <div className={classes.root}>
                    <div className={classes.footer_content}>
                        <Copyright />
                    </div>
                </div>
            </div>
        </footer>

    );
}