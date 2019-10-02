import * as React from "react";
import * as ReactDOM from "react-dom";
import { Card, Button, ButtonToolbar, Form, FormControl, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class BaseExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        };
    }
}

class IrregularVerbsExercise extends BaseExercise {
    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Control />
                    </Col>
                    <Col>
                        <Form.Control />
                    </Col>
                    <Col>
                        <Form.Control />
                    </Col>
                </Row>
            </Form>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            //  Don't forget to add the classes to the divs and h1 elements.
            <div className="container">
                <div className="row sm-5">
                    <div className="col-sm">
                        <h3 className="text-center mb-3 display-4">Memorize it!</h3>
                        <IrregularVerbsExercise></IrregularVerbsExercise>
                        /*
                        <Card style={{ maxWidth: "90%" }} className="mx-auto">
                            <Card.Header>Parcel Example</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className="mb-4 text-muted">
                                    A Parcel.js Example Built with React
                                </Card.Subtitle>
                                <Card.Text>
                                    I setup Parcel and built an app in 5 minutes and you can, too!
                                    Click the button below to learn more!
                                </Card.Text>
                                <Card.Link
                                    className="text-success"
                                    href="https://github.com/methodbox/parcel-example"
                                >
                                    Learn More
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer>
                                <ButtonToolbar>
                                    <Button variant="outline-primary">Test</Button>
                                </ButtonToolbar>
                            </Card.Footer>
                        </Card>
                         */
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
