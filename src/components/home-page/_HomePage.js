import * as React from "react";
import {Form, Col, Button, Row, Image} from 'react-bootstrap';
import IrregularWord from '../../services/IrregularWordService';

const irregularWordService = new IrregularWord();

export default class _HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            infinitive: '',
            simplePast: '',
            pastParticiple: '',
            verb: {}
        };

        this.onVerbChange = this.onVerbChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    nextWord() {
        const randomVerb = irregularWordService.getRandom();

        this.setState({
            infinitive: randomVerb.infinitive,
            simplePast: '',
            pastParticiple: '',
            verb: randomVerb
        });
    }

    componentDidMount() {
        this.nextWord();
    }

    onSubmit(event) {
        let isCorrect = true;

        if (this.state.verb.infinitive !== this.state.infinitive) {
            isCorrect = false;
            document.getElementById('infinitive').classList.add('alert');
            document.getElementById('infinitive').classList.add('alert-danger');
        }

        if (this.state.verb.simplePast !== this.state.simplePast) {
            isCorrect = false;
            document.getElementById('pastSimple').classList.add('alert');
            document.getElementById('pastSimple').classList.add('alert-danger');
        }

        if (this.state.verb.pastParticiple !== this.state.pastParticiple) {
            isCorrect = false;
            document.getElementById('pastParticiple').classList.add('alert');
            document.getElementById('pastParticiple').classList.add('alert-danger');
        }

        event.preventDefault();
        event.stopPropagation();

        if (isCorrect) {
            this.nextWord();
        }
    }

    onVerbChange(event) {
        event.target.classList.remove('alert');
        event.target.classList.remove('alert-danger');
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return(
            <div>
                <Row>
                    <Col className="text-center">
                        { this.state.verb.img ? <Image src={this.state.verb.img} className="img-thumbnail" rounded/> : null }
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                        { this.state.verb.examples ? this.state.verb.examples.map((example) => <div className="text-muted">{example}</div>) : null }
                    </Col>
                </Row>

                <Row><Col>&nbsp;</Col></Row>

                <Form onSubmit={this.onSubmit} autoComplete="off">
                    <Form.Row>
                        <Col>
                            <Form.Group>
                                <Form.Control id="infinitive" type="text" value={this.state.infinitive} onChange={this.onVerbChange}/>
                                <Form.Text className="text-muted">Infinitive</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control id="simplePast" type="text" value={this.state.simplePast} onChange={this.onVerbChange}/>
                                <Form.Text className="text-muted">Simple past</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control id="pastParticiple" type="text" value={this.state.pastParticiple} onChange={this.onVerbChange}/>
                                <Form.Text className="text-muted">Past participle</Form.Text>
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Row><Col>&nbsp;</Col></Form.Row>

                    <Form.Row>
                        <Col className="text-center">
                            <Button variant="outline-primary" type="submit">Check!</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}
