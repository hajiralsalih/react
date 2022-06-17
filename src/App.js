import logo from './logo.svg';
import { Nav, Navbar, NavDropdown ,Container,CardGroup,Card,Form,Button,Table,ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* first code */}
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Time The Code</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          Design by : <a href="#"> Hajir Alsaleh</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
{/* ----------------------------------------------------- */}
     {/* card */}
<CardGroup>
  {/* left side */}
      <Card>
        {/* img profile */}
      <Card.Img variant="top" src="./img/profile.jpg" className='profilimg'/>
      <Card.Body className='Group'>
        <Card.Title  >Social Media</Card.Title>
          <Card.Text>
    {/* <!--  Social media --> */}
      {/* <!-- Facebook --> */}
      <a href='#'><img src='./img/facebook.jpg' className='iim'/></a>
      {/* <!-- Gmail --> */}
      <a href='#'><img src='./img/email.png' className='iim'/></a>
      {/* <!-- whats app --> */}
      <a href='#'><img src='./img/whatsapp.png'className='iim'/></a>
      {/* <!-- Github --> */}
      <a href='#'><img src='./img/github.png'className='iim'/></a>
    {/* <!--  Social media --> */}
          </Card.Text>
        </Card.Body>  
      </Card>
{/* -------------------------------------------------------------- */}
     {/* right side */}
      <Card>
        <Card.Body >
        <Card.Text>
          <h1>Who Am I !?</h1>
        <p>
        A software engineer, working in the field of programming since 2017, 
        I built many websites and Android applications .. I own and manage
         a startup project related to programming and women's work in particular
        </p>
        <Table responsive="sm">
        <thead>
          <tr><th><br></br></th><th><br></br></th></tr>
          <tr>
            <th>Full Name</th>
            <td> Hajir Salih Almahdi Alsaleh</td>
            </tr>
            <tr>
            <th> Email</th>
            <td> blgees77saba@gmail.com</td>
            </tr>
            <tr>
            <th> Phone</th>
            <td> 092 224 87 94</td>
            </tr>
            <tr>
            <th> Mobile</th>
            <td> 091 696 56 22</td>
            </tr>
            <tr>
            <th> Address</th>
            <td>Libya(City:Sebha )  </td>
            </tr>
        </thead>  
      </Table>
      </Card.Text>
      <h5>My Team Work (All Team Girls) </h5>
          <snap>
          {/* My Team 
           heda /marwa/amany/mabroka/fatema/hajer/fatema */}
      <a href='#'><img src='./img/heba.jpg' className='iim'/></a>
      <a href='#'><img src='./img/marwa.jpg' className='iim'/></a>
      <a href='#'><img src='./img/amany.jpg'className='iim'/></a>
      <a href='#'><img src='./img/mab.jpg'className='iim'/></a>
      <a href='#'><img src='./img/fate.jpg' className='iim'/></a>
      <a href='#'><img src='./img/haj.jpg' className='iim'/></a>
      <a href='#'><img src='./img/fatee.jpg'className='iim'/></a>
          </snap>
        </Card.Body>
      </Card>
    </CardGroup>
     {/*#card  */}
{/* footer */}
<Card> 
<Card.Footer className='footer'>
          <h3>You Can Contact Me By...</h3>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Messege</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>

      <Button variant="info" type="submit">
        Send
      </Button>
    </Form>
        </Card.Footer>
        </Card>
{/*  */}

      {/* last code */}
    </div>
  );
}

export default App;
