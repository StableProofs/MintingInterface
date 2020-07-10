import React, {  } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col, Button, Form, FormGroup, Label, Input, Badge, Navbar, NavbarBrand, NavItem, Nav, Collapse, FormText} from 'reactstrap';
import './BurnContainer.css'
import Web3 from "web3";
import Web3Modal from "web3modal";
import proofsABI from '../../interfaces/proofs-interface'
import coinbaseOracle from '../../interfaces/coinbase-oracle'


class BurnContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            hasWeb3Provider: false,
            provider: {},
            selectedAddress: '',
            mintReceivingAddress: '',
            mintAmount: '',
            ethAddressError: false,
            ethPrice:'',
            qedAmount: ''
        }

        this.smartTrim = this.smartTrim.bind(this);
        this.handleMint = this.handleMint.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateAddress = this.validateAddress.bind(this);
        this.calculateQedAmount = this.calculateQedAmount.bind(this);
    }

    async componentDidMount() {
        const providerOptions = {
          };
          
          const web3Modal = new Web3Modal({
            network: "kovan", // optional
            cacheProvider: true, // optional
            providerOptions // required
          });
          
          const provider = await web3Modal.connect();
          
          const web3 = new Web3(provider);

          if ( provider.selectedAddress ) {
              const trimmedAddress = this.smartTrim( provider.selectedAddress, 12 )
              this.setState({
                  hasWeb3Provider: true,
                  provider: provider,
                  selectedAddress: trimmedAddress,
                  mintReceivingAddress: '',
                  mintAmount: ''
                });
          }

          provider.on("accountsChanged", (accounts) => {
            console.log('ACCOUNTS CHANGED: ', accounts);
          });
          
          // Subscribe to chainId change
          provider.on("chainChanged", (chainId) => {
            console.log('CHAIN CHANGE: ', chainId);
          });
          
          // Subscribe to provider connection
          provider.on("connect", (info) => {
            console.log('CONNECT :', info);
          });
          
          // Subscribe to provider disconnection
          provider.on("disconnect", (error) => {
            console.log('DISCONNECT: ', error);
          });

          const CoinbaseOracle = new web3.eth.Contract(coinbaseOracle['abi'], process.env.REACT_APP_ORACLE_ADDRESS);
          const oraclePrice = await CoinbaseOracle.methods.price().call() / 100
          if ( oraclePrice ) {
            this.setState({
                ethPrice: `$ ${oraclePrice}`
              });
          }

    }

    smartTrim(string, maxLength) {
        if (!string) return string;
        if (maxLength < 1) return string;
        if (string.length <= maxLength) return string;
        if (maxLength === 1) return string.substring(0,1) + '...';
    
        var midpoint = Math.ceil(string.length / 2);
        var toremove = string.length - maxLength;
        var lstrip = Math.ceil(toremove/2);
        var rstrip = toremove - lstrip;
        return string.substring(0, midpoint-lstrip) + '...' 
        + string.substring(midpoint+rstrip);
    } 

    async handleMint( event ) {
        console.log( 'CALLED HANDLE MINT WITH: ', this.state.mintReceivingAddress, this.state.mintAmount);
        const providerOptions = {
            /* See Provider Options Section */
          };
          
        const web3Modal = new Web3Modal({
            network: "kovan", // optional
            cacheProvider: true, // optional
            providerOptions // required
          });
          
        const provider = await web3Modal.connect();
          
        const web3 = new Web3(provider);

        const abi = proofsABI['abi']
        const address = process.env.REACT_APP_STABLE_PROOFS_ADDRESS;
        const contractInstance = new web3.eth.Contract(abi, address);

        const isValidAddress = await this.validateAddress()

        if ( isValidAddress ) {
            contractInstance.methods.mint(this.state.mintReceivingAddress).send({ from: this.state.provider.selectedAddress, value: '200000000000000000'})
            .then(function(receipt){
                console.log( 'MINT RECEIPT: ', receipt )
            });
        }

    }

    

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        if ( name === 'mintAmount' ) {
            this.setState({
                [name]: value,
            }, () => {
                this.calculateQedAmount()
            });
        } else {
            this.setState({
                [name]: value,
            });
        }
    }

    calculateQedAmount() {
        const qedAmount = (Number(this.state.mintAmount) * 0.99 * Number(this.state.ethPrice.replace('$', '').replace(' ', ''))).toFixed(2);
        this.setState({
            qedAmount: qedAmount
        });
    }

    async validateAddress() {
        const web3 = new Web3(null);
        try {
            const address = web3.utils.toChecksumAddress(this.state.mintReceivingAddress)
            console.log( 'Validated Address: ', address )
            return true;
          } catch(e) { 
            alert('Invalid Ethereum address')
            console.error('invalid ethereum address', e.message) 
            return false;
          }
    }


    render() {
        return (
            <div style={{height: "100%"}}>
                <Navbar light expand="md" style={{height:"7vh"}}>
                    <NavbarBrand href="/" className="cs-extra-bold top-left-logo" style={{color: "#12263F"}}>
                        StableProofs
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav  className="ml-auto" navbar>
                            <NavItem className={this.state.hasWeb3Provider ? 'color-pink' : ''}>{this.state.hasWeb3Provider ? `Connected: ${this.state.selectedAddress}` : 'No wallet connected'}</NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <div className="maxWidth100Percent maxHeight100Percent height100Percent OuterLandingDiv">
                <Row className="margin0 textAlignCenter height100Percent Aligner" style={{height:"80vh", paddingLeft: "5%", paddingRight: "5%", maxWidth:"70%"}}>
                    <Col className="Aligner-item" md="12">
                    <Form className="burn-form" style={{textAlign: "left"}}>
                        <h1 style={{textAlign:"left", marginBottom: "1%"}}>Mint QED</h1>
                        <FormGroup row>
                            <Label for="mintReceivingAddress" sm={3}>Receiving address
                            <FormText  className="desc-text">
                                Address to receive QED
                            </FormText>
                            </Label>
                            <Col sm={9} className="v-center-col">
                            <Input type="text" name="mintReceivingAddress" id="mintReceivingAddress" placeholder="0x..." onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="mintAmount" sm={3}>Amount in ETH
                            <FormText  className="desc-text">
                                Amount of ETH to burn
                            </FormText>
                            </Label>
                            <Col sm={9} className="v-center-col">
                            <Input type="number" name="mintAmount" id="mintAmount" placeholder="0" onChange={this.handleChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="ethPrice" sm={3}>Oracle ETH price
                            <FormText  className="desc-text">
                                On-chain ETH/USD price
                            </FormText>
                            </Label>
                            <Col sm={9} className="v-center-col">
                            <Input type="text" name="ethPrice" id="ethPrice" value={this.state.ethPrice} onChange={this.handleChange} disabled/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="mintingFee" sm={3}>Minting fee
                            <FormText  className="desc-text">
                                Current QED minting fee
                            </FormText>
                            </Label>
                            <Col sm={9} className="v-center-col">
                            <Input type="text" name="mintingFee" id="ethPrice" value="1%" disabled/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="qedAmount" sm={3}>Issuance
                            <FormText  className="desc-text">
                                QED to be issued
                            </FormText>
                            </Label>
                            <Col sm={9} className="v-center-col">
                            <Input type="text" name="qedAmount" id="qedAmount" value={this.state.qedAmount} onChange={this.handleChange} placeholder="0" disabled/>
                            </Col>
                        </FormGroup>
                        <div style={{textAlign: "center"}}>
                            <Button 
                                className="confirm-btn" 
                                style={{minWidth:"70%", minHeight:"60px", textAlign: "center", marginTop: "1%"}}
                                onClick={this.handleMint}>
                                Mint QED
                            </Button>
                            <p className="color-navy" style={{marginBottom: "0", marginTop:"0.5rem"}}><Badge className="warning-badge"><span role="img" aria-label="skull">☠️</span>This contract is unaudited, use at your own risk <span role="img" aria-label="skull">☠️</span></Badge></p>
                        </div>
                    </Form>
                    </Col>
                </Row>
                </div>
            </div>
        );
    }
}

export default withRouter(BurnContainer)