import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'

// RAFCE+enter react arrow function component export 

const Footer = () => {
    return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>Copyright &copy; ArtSwiftsh
                </Col>
            </Row>
        </Container>

         
    </footer>
    )
}

export default Footer
