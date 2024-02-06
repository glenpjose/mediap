import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

    const navigateByUrl=useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
  <Col> </Col>
  <Col lg={5}>
<h1 style={{textAlign:'justify'}}>Welcome To <span className='text-danger'> Media Player</span> </h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab similique alias voluptatum ipsam, eos possimus obcaecati nam, necessitatibus cum assumenda eveniet rerum, quia est? Adipisci quidem magnam consequatur eligendi.</p>
  <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-dark'> Get Started</button>
  </Col>
  <Col lg={5}>
    <img src='https://i.pinimg.com/originals/e5/f8/82/e5f882d97e4344fa200569f3ab997a23.gif' alt='' height={'500px'} width={'500px'}></img>
  </Col>
  <Col></Col>
</Row>
    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>

        <h3>Features</h3>

        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <Card className='p-5 bg-primary'style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://cdn.dribbble.com/users/3248309/screenshots/9838060/media/917590954b9cff82c3de8c97e13ab18e.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Card className='p-5 bg-primary'style={{ width: '22rem'}}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/e4/66/7d/e4667df2d0b46afa0f5a4514259529e5.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-5 bg-primary'style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/9d/97/23/9d9723403a5cae26f3da6f1145ef0865.gif" />
      <Card.Body>
        <Card.Title className='text-warning'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>
    </div>

    <div className="container border rounded p-5 border secondary mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
            <h3 className='mb-3 text-warning'>Simple, Powerful & Fast</h3>
            <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis, explicabo doloremque quibusdam aut, impedit quasi dolor distinctio beatae dolores veniam quisquam dolorum sed delectus. Sit explicabo atque veritatis quo!</h6>

            <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis, explicabo doloremque quibusdam aut, impedit quasi dolor distinctio beatae dolores veniam quisquam dolorum sed delectus. Sit explicabo atque veritatis quo!</h6>
            
            <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Managing  Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis, explicabo doloremque quibusdam aut, impedit quasi dolor distinctio beatae dolores veniam quisquam dolorum sed delectus. Sit explicabo atque veritatis quo!</h6>
        </div>

  <div className="video col-lg-5">
  <iframe width="530" height="315" src="https://www.youtube.com/embed/3BEHQEiDgW0?si=Vrbq5CBYSwUbD5Wr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
    </div>
    </>
  )
}

export default Landingpage