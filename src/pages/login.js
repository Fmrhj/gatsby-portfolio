import React, { Component } from "react"
import '../../styles/styles.scss'

// import netlify identity API as React Component
function initNetlifyIdentity() {
    console.log("initNetlifyIdentity called")
    const script = document.createElement('script');

    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
    script.async = true;

    document.body.appendChild(script);
}

function openNetlifyModal() {
    const netlifyIdentity = window.netlifyIdentity;

    if (netlifyIdentity)
        netlifyIdentity.open();
    else
        console.log("netlify not defined")
}

class NetlifyIdentity extends Component {
    
    componentDidMount() {
        initNetlifyIdentity();
    }

    render() {
        return (<div></div>)
    }
}

class NetlifyRunOnLoad extends Component {
    
    componentDidMount() {
        openNetlifyModal();
    }

    render() {
        return (<div></div>)
    }
}

const LoginPage = () => {
    return (
        <div>
            <NetlifyIdentity />
            <NetlifyRunOnLoad />
            <h2 onClick = {() => {openNetlifyModal()}}>Log in</h2>
        </div>
    )
}

export default LoginPage