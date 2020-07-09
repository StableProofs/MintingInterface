import React, {  } from 'react';
import { Container } from 'reactstrap';
import './FooterContainer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="footer" style={{padding:"0px"}}>
                <p className="footer-text cs-extra-bold" style={{marginBottom:"0px", color:"#EDF2F9"}}>Made with <i className="fas fa-heart"></i> by Brandon McFarland</p>
            </Container>
        )
    }
}