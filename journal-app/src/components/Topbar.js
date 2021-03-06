import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import firebase from '../firebase.js';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedout: false
        };
    }

    signOut = () => {
        var uid = sessionStorage.getItem('uid')
        this.setState({loggedout: true})
    }
    
    render() {

        if (this.state.loggedout === true) {
            return <Redirect to=''/>
        }

        return (
            <div class="topbar">

                <div class="topbar-title">journ-o</div>
                <div class="outline-button" onClick={this.signOut}>sign out</div>

            </div>
        );
    }
}

export default Topbar;