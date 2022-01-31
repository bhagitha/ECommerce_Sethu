import React from 'react';
import { Nav, NavDropdown, Container, Navbar, InputGroup, FormControl, Button } from 'react-bootstrap';
import './topbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
export default function Topbar() {
    return (
        <div>
            <Navbar className='topbg' style={{height:"4em"}} collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{fontSize:"30px"}}>EshoPy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <InputGroup className='serach'>
                                <FormControl className='ms-2' style={{width:"45em"}}
                                    placeholder="Search as you wish to shop.."
                                    aria-label="Search as you wish to shop.."
                                    aria-describedby="basic-addon2"
                                    
                                />
                                <Button className='btn' id="button-addon2" style={{background:"none"}}>
                                    Search
                                </Button>
                            </InputGroup>
                            <Nav>
                            <Nav.Link href="#deets" className='text-white ms-2'>Login</Nav.Link>
                            
                            </Nav>
                            <NavDropdown className=' ms-2'title="More" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="" className='text-white'> <ShoppingCartIcon/></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    )

}
