import React from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col, Spinner, Badge, Container } from 'reactstrap';
import LinkButton from '../LinkButton/LinkButton';
import './LandingContainer.css';

class LandingContainer extends React.Component {

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
      <div style={{height: "100%"}}>
            <div className="maxWidth100Percent maxHeight100Percent height100Percent OuterLandingDiv">
                <Row className="maxWidth100 margin0 textAlignCenter height100Percent Aligner" style={{paddingLeft: "5%", paddingRight: "5%", borderBottom: "1px solid #12263F"}}>
                    <Col className="Aligner-item" md="12" style={{marginBottom: "3%"}}>
                        <h1 className="cs-extra-bold landing-h1 color-navy" style={{textAlign:"center"}}>A stablecoin backed<br/>by nothing</h1>
                        {/* <h5 className="color-navy landing-h5" style={{marginTop: "2%"}}>Stop using fiat-backed stablecoins and complicated stablecoin procotols <span role="img" aria-label="thumbs-down">👎</span></h5> */}
                        {/* <h3 className="color-navy  landing-h5" style={{marginTop: "2%"}}>Burn 1 USD worth of ETH to create 1 QED <span role="img" aria-label="thumbs-up">👍</span></h3> */}
                        <h3 className="color-navy  landing-h5" style={{marginTop: "2%"}}><span role="img" aria-label="thumbs-up">🔥</span>Burn 1 USD worth of ETH to create 1 QED<span role="img" aria-label="thumbs-up">🔥</span></h3>
                        {/* <a className="address-link" target="blank" rel="noopener noreferrer" href={`https://etherscan.io/address/${process.env.REACT_APP_STABLE_PROOFS_ADDRESS}`}><h6 style={{marginTop: "2%"}} className="landing-h6">Token contract address: <code>{process.env.REACT_APP_STABLE_PROOFS_ADDRESS}</code></h6></a> */}
                        <p className="color-navy landing-h6" style={{marginBottom: "0.5rem", marginTop: "2%"}}>Check out the code on <span><a className="pink-link" href="https://github.com/StableProofs" target="_blank" rel="noopener noreferrer">Github</a></span> and <span><a className="pink-link" href={`https://etherscan.io/address/${process.env.REACT_APP_STABLE_PROOFS_ADDRESS}`} target="_blank" rel="noopener noreferrer">Etherscan</a></span></p>
                        <p className="color-navy landing-h6" style={{marginBottom: "0"}}><Badge className="warning-badge"><span role="img" aria-label="skull">☠️</span>This contract is unaudited, use at your own risk <span role="img" aria-label="skull">☠️</span></Badge></p>
                    </Col>
                    <Col className="Aligner-item" md="12" style={{maxWidth:"50%", margin:"0 auto", textAlign:"left", marginBottom:"2%"}}>
                        <Row>
                            { this.state.isDesktop ? 
                            <Col md="12" style={{width: "50%", textAlign:"center"}}>
                            <LinkButton
                                className="landing-button"
                                to='/burn'
                                style={{minWidth: "50%"}}
                                ><span role="img" aria-label="fye">🔥</span> Mint QED <span role="img" aria-label="fye">🔥</span></LinkButton>
                            </Col>
                            :
                            <Col md="12" style={{width: "100%", textAlign:"center"}}>
                            <LinkButton
                                className="landing-button"
                                style={{minWidth: "50%"}}
                                to=""
                                disabled
                                >Desktop only <span role="img" aria-label="comp">🖥</span></LinkButton>
                            </Col>
                            }
                        </Row>
                    </Col>
                </Row>
                <Row className="maxWidth100 margin0 textAlignCenter height100Percent Aligner" style={{paddingLeft: "5%", paddingRight: "5%", paddingTop: "2%", background: "white"}}>
                    <Col className="Aligner-item" md="12" style={{margin:"0 auto", textAlign:"left", marginBottom:"2%", borderLeft: "1px solid #12263F"}}>
                    <h3 className="cs-extra-bold color-navy landing-h3">How it works</h3>
                    <h5 className="color-navy landing-h5" style={{fontSize: "1rem"}}>When you send ETH to this contract while calling the <code>mint()</code> method, the contract:</h5>
                        <ol className="color-navy landing-ol">
                            <li>Calls <code>getPrice()</code> on a Coinbase Oracle data feed to get the price of ETH in USD</li> 
                            <li>Calculates the USD value of <code>msg.value</code> using the on-chain oracle's ETH price</li> 
                            <li>Issues the equivalent amount of QED token to the receiving address specified by <code>msg.sender</code></li>
                            <li>Burns the ETH by sending it to the <code>ZERO_ADDRESS</code></li>
                        </ol>
                    </Col>

                    <Col className="Aligner-item" md="12" style={{margin:"0 auto", textAlign:"left", marginBottom:"2%", borderLeft: "1px solid #12263F"}}>
                        <h3 className="cs-extra-bold color-navy landing-h3">Contract methods</h3> 
                        <ul className="color-navy landing-ol">
                            <li>
                                totalSupply: <code>totalSupply() -&gt; uint256</code>
                                <ul>
                                    <li>Get the total number of tokens in existance</li>
                                </ul>
                                
                            </li>
                            <li style={{listStyle:"none"}}>&nbsp;</li>
                            <li>
                                allowance: <code>allowance(_owner : address, _spender : address) -&gt; uint256</code>
                                <ul>
                                    <li>Check the amount of an owner's tokens that are still available for a spender</li>
                                </ul>
                            </li>
                            <li style={{listStyle:"none"}}>&nbsp;</li>
                            <li>
                                transfer: <code>transfer(_to : address, _value : uint256) -&gt; bool</code>
                                <ul>
                                <li>Transfer your own tokens to a specified address</li>
                                </ul>
                            </li>
                            <li style={{listStyle:"none"}}>&nbsp;</li>
                            <li>
                                transferFrom: <code>transferFrom(_from : address, _to : address, _value : uint256) -&gt; bool</code>
                                <ul>
                                    <li>Transfer tokens from an address you don't own to another address</li>
                                </ul>
                            </li>
                            <li style={{listStyle:"none"}}>&nbsp;</li>
                            <li>
                                approve: <code>approve(_spender : address, _value : uint256) -&gt; bool</code>
                                <ul>
                                <li>Approve the spender's address to spend the specified amount of tokens on behalf of msg.sender</li>
                                </ul>
                            </li>
                            <li style={{listStyle:"none"}}>&nbsp;</li>
                            <li>
                                mint: <code>mint(_to: address)</code>
                                <ul>
                                <li>Mint an amount of QED and issue it to a specified account</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>

                    <Col className="Aligner-item" md="12" style={{margin:"0 auto", textAlign:"left", marginBottom:"2%", borderLeft: "1px solid #12263F"}}>
                    <h3 className="cs-extra-bold color-navy landing-h3">Frequently asked questions</h3>
                        <ul className="color-navy landing-ol">
                            <li>
                                Where does the ETH/USD price come from?
                                <ul>
                                    <li>I publish <a href="https://docs.pro.coinbase.com/#oracle" target="blank" rel="noopener noreferrer" className="pink-link">Coinbase Oracle</a> price data on-chain at <a href={`https://etherscan.io/address/${process.env.REACT_APP_ORACLE_ADDRESS}`} target="blank" rel="noopener noreferrer" className="pink-link">this address</a>. The <code>mint()</code> method reads the ETH/USD price from this oracle contract.</li>
                                </ul>
                                
                            </li>
                            <li style={{listStyle:"none"}}>&nbsp;</li>
                            <li>
                                How often is price data updated?
                                <ul>
                                    <li>Every 15 minutes. Use StableProofs or donate by sending ETH to <code>{process.env.REACT_APP_STABLE_PROOFS_ADDRESS}</code> so I can afford to increase the update frequency to every minute 🤠</li>
                                </ul>
                            </li>
                            <li style={{listStyle:"none"}}>&nbsp;</li>
                            <li>
                                What wallets does the web interface support?
                                <ul>
                                    <li>Metamask. Web3Modal integration is in progress.</li>
                                </ul>
                            </li>
                            <li style={{listStyle:"none"}}>&nbsp;</li>
                            <li>
                                Have another question?
                                <ul>
                                    <li><a href="https://twitter.com/BranMcF" target="blank" rel="noopener noreferrer" className="pink-link">Message me on Twitter!</a></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Container fluid className="footer" style={{padding:"0px"}}>
                        <p className="footer-text cs-extra-bold" style={{marginBottom:"0px", color:"#EDF2F9"}}>Made with <i className="fas fa-heart"></i> by Brandon McFarland</p>
                    </Container>
                </Row>
            </div>
      </div>
    );
    
  }
}

export default withRouter(LandingContainer)