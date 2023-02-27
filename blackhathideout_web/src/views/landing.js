/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import Lottie from 'lottie-react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "../components/navbar";
import Globe from "../components/globe";
import bigChartData from "../variables/charts.js";
import Footer from "../components/Footer/Footer.js";
import  GoodHacker  from "../assets/lotties/Goodhacker.json";
import  BadHacker  from "../assets/lotties/BadHacker.json";
import  GreyHacker  from "../assets/lotties/GreyHacker.json";


export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar/>
      <div className="wrapper">
        
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("../assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("../assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("../assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("../assets/img/cercuri.png")}
          />
          <div className="content-center" style={{width: '100%'}}>
            <Row className="row-grid justify-content-between align-items-center text-left" style={{width: '100%'}}>
              <Col lg="8" md="6">
                <h1 className="text-white">
                Stay Ahead of the Game with the Latest Ethical Hacking <br />
                  <span className="text-white">Tools and Resources </span>
                </h1>
                <p className="text-white mb-3">
                Join now and connect with like-minded individuals from around the world. Collaborate on projects, share your knowledge and experience, and take your skills to the next level. Sign up today and become part of the BlackHatHideout community!
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    SignUp Now!
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6">
                <Globe />   
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("../assets/img/path4.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats ">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-single-02 text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3,237+</CardTitle>
                                <p />
                                <p className="card-category">Users</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-settings text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">37</CardTitle>
                                <p />
                                <p className="card-category">Tools</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-single-copy-04 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">593</CardTitle>
                                <p />
                                <p className="card-category">Blogs</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-money-coins text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">783</CardTitle>
                                <p />
                                <p className="card-category">Jobs</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Large <br />
                      Achivements
                    </h1>
                    <p>
                    With a vast array of tools, expert blogs and articles, and job listings for top security firms, our platform empowers you to take your skills to the next level.
                    </p>
                    <br />
                    <p>
                    Whether you're just starting out in the field or you're a seasoned pro, our platform is designed to help you unlock your potential and achieve your goals.
                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Show all{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("../assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Your best benefit</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-settings" />
                      </div>
                      <h4 className="info-title">One Stop Tools</h4>
                      <hr className="line-primary" />
                      <p>
                        Find all the tools you need to get the job done in one
                        place. From sub domain to vulnerability scanners,
                        we've got you covered.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">High Incomes</h4>
                      <hr className="line-warning" />
                      <p>
                        We've got the best job listings for top security firms
                        in the industry. Find your next gig and start earning
                        more. 
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-copy-04" />
                      </div>
                      <h4 className="info-title">Verified People</h4>
                      <hr className="line-success" />
                      <p>
                        Stay updated with the latest news and trends in the
                        industry. Our expert blogs and articles will keep you
                        informed and up to date.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("../assets/img/cybergirl.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">Safe</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">5000$+</CardTitle>
                        <p className="card-category text-white">
                          Bounty Programs
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10k +</CardTitle>
                        <p className="card-category text-white">Blogs</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Awesome features</h3>
                  <p>
                    The design system comes with three pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Carefully crafted components</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Amazing page examples</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Super friendly support team</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../assets/img/path2.png")}
          />
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Total Active Users</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/path3.png")}
          />
          <Container>
            <Row>
              
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose The Hat  <br/>{"     "}
                  <span className="text-info">that you fit in.</span>
                </h1>
              </Col>
            </Row>
            <Row>
            <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <Lottie animationData={GreyHacker} />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">White Hat</h4>
                        <span>Values</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Ethical</ListGroupItem>
                        <ListGroupItem>Professional</ListGroupItem>
                        <ListGroupItem>Helpful</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                    Join Group
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <Lottie animationData={GoodHacker} />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Grey Hat</h4>
                        <span>Values</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Ambiguous</ListGroupItem>
                        <ListGroupItem>Curious</ListGroupItem>
                        <ListGroupItem>Adventurous</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Join Group
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                  <Lottie animationData={BadHacker} />

                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Black Hat</h4>
                        <span>Values</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Malicious</ListGroupItem>
                        <ListGroupItem>Illegal</ListGroupItem>
                        <ListGroupItem>Devious</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                    Join Group
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
