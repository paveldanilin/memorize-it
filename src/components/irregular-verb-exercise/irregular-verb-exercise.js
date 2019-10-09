import React, { useState } from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import UsageExamples from "../usage-examples/usage-examples";
import IrregularWord from "../../services/irregular-word";

const irregularWordService = new IrregularWord();

function renderImage(img) {
    return (
        <Row>
            <Col className="text-center">
                { img ? <Image src={img} className="img-thumbnail" rounded/> : null }
            </Col>
        </Row>
    );
}

function renderNativeWord(word) {
    return (
        <Row>
            <Col className="text-center">
                { word ? <div className="alert alert-success"><strong>{ word }</strong></div> : null }
            </Col>
        </Row>
    );
}

function renderExamples(examples, targetWords) {
    return (
        <Row>
            <Col className="text-center">
                <UsageExamples examples={ examples } highlights={ targetWords } />
            </Col>
        </Row>
    );
}

function renderWordInput(id, word, description, readonly, invalid, onChange) {
    return (
        <Col>
            <Form.Group>
                <Form.Control
                    readOnly={readonly || false}
                    isInvalid={invalid || false}
                    id={id}
                    type="text"
                    value={word}
                    onChange={onChange}/>
                <Form.Text className="text-muted">{description}</Form.Text>
            </Form.Group>
        </Col>
    );
}

const IrregularVerbExercise = ({}) => {

    const hintNumber = Math.floor(Math.random() * 3) + 1;

    const [verb, setVerb] = useState(irregularWordService.getRandom);

    const [infinitiveInput, setInfinitiveInput] = useState(hintNumber === 1 ? verb.infinitive : '');
    const [pastSimpleInput, setPastSimpleInput] = useState(hintNumber === 2 ? verb.pastSimple : '');
    const [pastParticipleInput, setPastParticipleInput] = useState(hintNumber === 3 ? verb.pastParticiple : '');

    const [infinitiveInvalid, setInfinitiveInvalidity] = useState(false);
    const [pastSimpleInvalid, setPastSimpleInvalidity] = useState(false);
    const [pastParticipleInvalid, setPastParticipleInvalidity] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        setInfinitiveInvalidity(infinitiveInput !== verb.infinitive);
        setPastSimpleInvalidity(pastSimpleInput !== verb.pastSimple);
        setPastParticipleInvalidity(pastParticipleInput !== verb.pastParticiple);

        if ( infinitiveInput !== verb.infinitive || pastSimpleInput !== verb.pastSimple || pastParticipleInput !== verb.pastParticiple) {
            // onFailed(e);
        } else {
            // onPass(e);
            const verb = irregularWordService.getRandom();
            setVerb(verb);
            const hintNumber = Math.floor(Math.random() * 3) + 1;
            setInfinitiveInput(hintNumber === 1 ? verb.infinitive : '');
            setPastSimpleInput(hintNumber === 2 ? verb.pastSimple : '');
            setPastParticipleInput(hintNumber === 3 ? verb.pastParticiple : '');
        }
    };

    return (
        <>
            { renderImage(verb.img) }

            { renderNativeWord(verb.locale.ru || verb.infinitive) }

            { renderExamples(verb.examples, [verb.infinitive]) }

            <Row><Col>&nbsp;</Col></Row>

            <Form onSubmit={onSubmit} autoComplete="off">
                <Form.Row>
                    { renderWordInput(
                        'infinitive',
                        infinitiveInput,
                        'Infinitive',
                        false,
                        infinitiveInvalid,
                        (e) => setInfinitiveInput(e.target.value))
                    }
                    { renderWordInput(
                        'pastSimple',
                        pastSimpleInput,
                        'Past simple',
                        false,
                        pastSimpleInvalid,
                        (e) => setPastSimpleInput(e.target.value))
                    }
                    { renderWordInput(
                        'pastParticiple',
                        pastParticipleInput,
                        'Past participle',
                        false,
                        pastParticipleInvalid,
                        (e) => setPastParticipleInput(e.target.value))
                    }
                </Form.Row>

                <Form.Row><Col>&nbsp;</Col></Form.Row>

                <Form.Row>
                    <Col className="text-center">
                        <Button variant="outline-primary" type="submit">Check!</Button>
                    </Col>
                </Form.Row>
            </Form>
        </>
    );
};

export default IrregularVerbExercise;
