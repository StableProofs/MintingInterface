import React from 'react';
import LandingContainer from "../../components/LandingContainer/LandingContainer.jsx";
import LogoNavbarContainer from "../../components/LogoNavbarContainer/LogoNavbarContainer.jsx"
import './LandingView.css';

export default class LandingView extends React.Component {  

    render() {
        return (
            <div>
                <LogoNavbarContainer></LogoNavbarContainer>
                <LandingContainer></LandingContainer>
            </div>
        )
    } 
}