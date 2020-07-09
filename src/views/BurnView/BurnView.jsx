import React from 'react';
import BurnContainer from "../../components/BurnContainer/BurnContainer.jsx";
import { Navbar, NavbarBrand } from 'reactstrap';
import './BurnView.css';

export default class BurnView extends React.Component {  
    constructor(props) {
        super(props);
        this.state ={
            isDesktop: false
        }

        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 1300 });
      }

    render() {
        return (
            <div>
 
                { this.state.isDesktop ?
                
                <BurnContainer></BurnContainer>
                :
                <div style={{height: "100vh"}}>
                    <Navbar light expand="md" style={{height:"7vh"}}>
                        <NavbarBrand href="/" className="cs-extra-bold top-left-logo" style={{color: "#12263F"}}>
                            StableProofs
                        </NavbarBrand>
                    </Navbar>
                    <div className="Aligner" style={{height: "93%"}}>
                        <div className="Aligner-item">
                            <h1 className="cs-extra-bold landing-h1 color-navy">Desktop only <span role="img" aria-label="comp">🖥</span></h1>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    } 
}

