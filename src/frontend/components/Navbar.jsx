import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import pngwing from './pngwing.png'


const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar expand="lg"  variant="light"    >
            <Container>
                <Navbar.Brand >
                    <img src={pngwing} width="50" height="50" className="" alt="" />
                    <h3 style={{ display: 'flex', color: 'yellow'}} >GoldeภdroƤ</h3>
                    &nbsp; 
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" style={{  color: 'white'}}><h6>Explore</h6></Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items" style={{  color: 'white'}}><h6>My Listed Items</h6></Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases" style={{  color: 'white'}}><h6>My Purchases</h6></Nav.Link>
                       
                        <Nav.Link as={Link} to="/About " style={{  color: 'white'}}><h6>About Us </h6></Nav.Link>
                        <Nav.Link as={Link} to="/Contact" style={{  color: 'white'}}><h6>Contact </h6></Nav.Link>
                    </Nav>
                   <nav> <Nav.Link as={Link} to="/create"  
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4" style={{ color: 'white',}}><h4>Create</h4></Nav.Link></nav>
                                 
                    <Nav >
                    
                        
                           
                            
                        {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4" >
                                <Button variant="outline-light" style={{ color: "pink" }}>
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-warning" style={{ color: "white" }}>Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;