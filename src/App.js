import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import react from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Button from 'react-bootstrap/Button';
import Helmet from 'react-helmet';

function App() {
  return (
    <main>
    <div className="pricing py-5 min-vh-100 min-vw-100">
    <Helmet>
                <style>{'body { background-color: blue; }'}</style>
    </Helmet>
      <Container>
        <Row>
          <Col lg="4">
            <Card hover="true">
              {/* <Card.Header className="text-muted"><h5>Free</h5></Card.Header> */}
              <Card.Body>
                <Card.Title>
                <h5 class="card-title text-center text-uppercase text-muted">Free</h5>
                <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                </Card.Title>
                <hr />
                <ul>
              <li><FaCheck /><p2>Single Users</p2></li>
              <li><FaCheck /><p2>5GB Storage</p2></li>
              <li><FaCheck /><p2>Unlimited Public Projects</p2></li>
              <li><FaCheck /><p2>Community Access</p2></li>
              <li class="text-muted"><ImCross /><p2>Unlimited Private Projects</p2></li>
              <li class="text-muted"><ImCross /><p2>Dedicated Phone Support</p2></li>
              <li class="text-muted"><ImCross /><p2>Free Subdomain</p2></li>
              <li class="text-muted"><ImCross /><p2>Monthly Status Reports</p2></li>
            </ul>
            <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Button
            </Button>
            </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="4">
            <Card>
              {/* <Card.Header className="text-muted"><h5>Free</h5></Card.Header> */}
              <Card.Body>
                <Card.Title>
                <h5 class="card-title text-center text-uppercase text-muted">Plus</h5>
                <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                </Card.Title>
                <hr />
                <ul class="fa-ul">
              <li><FaCheck /><p2>5 Users</p2></li>
              <li><FaCheck /><p2>50GB Storage</p2></li>
              <li><FaCheck /><p2>Unlimited Public Projects</p2></li>
              <li><FaCheck /><p2>Community Access</p2></li>
              <li><FaCheck /><p2>Unlimited Private Projects</p2></li>
              <li><FaCheck /><p2>Dedicated Phone Support</p2></li>
              <li><FaCheck /><p2>Free Subdomain</p2></li>
              <li class="text-muted"><ImCross /><p2>Monthly Status Reports</p2></li>
            </ul>
            <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Button
            </Button>
            </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="4">
            <Card>
              {/* <Card.Header className="text-muted"><h5>Free</h5></Card.Header> */}
              <Card.Body>
                <Card.Title>
                <h5 class="card-title text-center text-uppercase text-muted">Pro</h5>
                <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                </Card.Title>
                <hr />
                <ul class="fa-ul">
              <li><FaCheck /><p2><b>Unlimited Users</b></p2></li>
              <li><FaCheck /><p2>150GB Storage</p2></li>
              <li><FaCheck /><p2>Unlimited Public Projects</p2></li>
              <li><FaCheck /><p2>Community Access</p2></li>
              <li><FaCheck /><p2>Unlimited Private Projects</p2></li>
              <li><FaCheck /><p2>Dedicated Phone Support</p2></li>
              <li><FaCheck /><p2><b>Unlimited </b>Free Subdomain</p2></li>
              <li><FaCheck /><p2>Monthly Status Reports</p2></li>
            </ul>
            <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Button
            </Button>
            </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
    </main>
  );
}

export default App;
