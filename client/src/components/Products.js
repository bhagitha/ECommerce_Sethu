import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Products() {
    return (
        <div className='container mt-2'>
            <div className='row '>
                <div className='col-lg-3'>
                    <Card border="primary">
                        <Card.Img variant="top" src="./images/galaxyA31.jpg" className='w-100 mt-2' />
                        <Card.Body>
                            <Card.Title className='fs-6'>SAMSUNG GALAXY A31</Card.Title>
                            <Card.Text>
                                Rs.21,999
                            </Card.Text>
                            <Button variant="primary">Buy <PaidOutlinedIcon /></Button>
                            <Button variant="primary" className='ms-5'>Cart <ShoppingCartOutlinedIcon /></Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-3'>
                    <Card border="primary" >
                        <Card.Img variant="top" src="./images/cottonsaree.jpg" className='w-100 mt-2 ' />
                        <Card.Body>
                            <Card.Title className='text-uppercase fs-6'> Mercerised CottonSaree</Card.Title>
                            <Card.Text>
                                Rs.800
                            </Card.Text>
                            <Button variant="primary">Buy <PaidOutlinedIcon /></Button>
                            <Button variant="primary" className='ms-5'>Cart <ShoppingCartOutlinedIcon /></Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-3'>
                    <Card border="primary" >
                        <Card.Img variant="top" src="./images/philipsHP8302.jpg" className='w-100 mt-2' />
                        <Card.Body>
                            <Card.Title className='text-uppercase fs-6'>Philips Selfie Straightner</Card.Title>
                            <Card.Text>
                                Rs.2000
                            </Card.Text>
                            <Button variant="primary">Buy <PaidOutlinedIcon /></Button>
                            <Button variant="primary" className='ms-5'>Cart <ShoppingCartOutlinedIcon /></Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-3'>
                    <Card border="primary">
                        <Card.Img variant="top" src="./images/giantteddybear.jpg" className='w-100 mt-2' />
                        <Card.Body>
                            <Card.Title className='text-uppercase fs-6'>Giant TeddyBear</Card.Title>
                            <Card.Text>
                                Rs.2500
                            </Card.Text>
                            <Button variant="primary">Buy <PaidOutlinedIcon /></Button>
                            <Button variant="primary" className='ms-5'>Cart <ShoppingCartOutlinedIcon /></Button>
                        </Card.Body>
                    </Card>
                </div>
                
                    <div className='col-lg-3 mt-3 '>
                        <Card border="primary">
                            <Card.Img variant="top" src="./images/adidas shoe.jpg" className='w-100 mt-2' />
                            <Card.Body>
                                <Card.Title className='text-uppercase fs-6'>Adidas BlackShoe</Card.Title>
                                <Card.Text>
                                    Rs.800
                                </Card.Text>
                                <Button variant="primary">Buy <PaidOutlinedIcon /></Button>
                                <Button variant="primary" className='ms-5'>Cart <ShoppingCartOutlinedIcon /></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 mt-3'>
                        <Card border="primary" >
                            <Card.Img variant="top" src="./images/lakme_Spotlight.jpg" className='w-100 mt-2' />
                            <Card.Body>
                                <Card.Title className='text-uppercase fs-6'>Eyeshadow Pallet</Card.Title>
                                <Card.Text>
                                    Rs.1250
                                </Card.Text>
                                <Button variant="primary">Buy <PaidOutlinedIcon /></Button>
                                <Button variant="primary" className='ms-5'>Cart <ShoppingCartOutlinedIcon /></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 mt-3'>
                        <Card border="primary" >
                            <Card.Img variant="top" src="./images/godrej ws 800 washing.jpg" className='w-100 mt-2' />
                            <Card.Body>
                                <Card.Title className='text-uppercase fs-6'>Godrej ws800 </Card.Title>
                                <Card.Text>
                                    Rs.6000
                                </Card.Text>
                                <Button variant="primary">Buy <PaidOutlinedIcon /></Button>
                                <Button variant="primary" className='ms-5'>Cart <ShoppingCartOutlinedIcon /></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 mt-3'>
                        <Card border="primary" >
                            <Card.Img variant="top" src="./images/kurthi.jpeg" className='w-100 mt-2' />
                            <Card.Body>
                                <Card.Title className='text-uppercase fs-6'>Kurthy</Card.Title>
                                <Card.Text>
                                    Rs.300
                                </Card.Text>
                                <Button variant="primary">Buy <PaidOutlinedIcon /></Button>
                                <Button variant="primary" className='ms-5'>Cart <ShoppingCartOutlinedIcon /></Button>
                            </Card.Body>
                        </Card>
                    </div>

                

            </div>
        </div>
    )

}
