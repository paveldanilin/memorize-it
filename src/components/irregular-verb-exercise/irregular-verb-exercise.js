import React, { useState, useEffect } from 'react';
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

function disableButtonById(id) {
    const el = document.getElementById(id);
    if (el.tagName !== 'BUTTON') {
        return;
    }
    el.disabled = true;
}

function enableButtonById(id) {
    const el = document.getElementById(id);
    if (el.tagName !== 'BUTTON') {
        return;
    }
    el.disabled = false;
}

const IrregularVerbExercise = ({}) => {

    const BTN_CHECK_ID = 'btn-check';
    const BTN_HELPME_ID = 'btn-help-me';
    const hintNumber = Math.floor(Math.random() * 4) + 1;

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
            const hintNumber = Math.floor(Math.random() * 4) + 1;
            setInfinitiveInput(hintNumber === 1 ? verb.infinitive : '');
            setPastSimpleInput(hintNumber === 2 ? verb.pastSimple : '');
            setPastParticipleInput(hintNumber === 3 ? verb.pastParticiple : '');
        }
    };

    const onHelp = (e) => {
        setInfinitiveInput(verb.infinitive);
        setPastSimpleInput(verb.pastSimple);
        setPastParticipleInput(verb.pastParticiple);
        disableButtonById(BTN_HELPME_ID);
    };

    useEffect(() => {
        document.getElementById('infinitive').focus();
        enableButtonById(BTN_HELPME_ID);
    }, [verb]);

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
                        (e) => setInfinitiveInput(e.target.value.toLowerCase()))
                    }
                    { renderWordInput(
                        'pastSimple',
                        pastSimpleInput,
                        'Past simple',
                        false,
                        pastSimpleInvalid,
                        (e) => setPastSimpleInput(e.target.value.toLowerCase()))
                    }
                    { renderWordInput(
                        'pastParticiple',
                        pastParticipleInput,
                        'Past participle',
                        false,
                        pastParticipleInvalid,
                        (e) => setPastParticipleInput(e.target.value.toLowerCase()))
                    }
                </Form.Row>

                <Form.Row><Col>&nbsp;</Col></Form.Row>

                <Form.Row>
                    <Col className="text-center">
                        <div className="btn-group">
                            <Button id={BTN_CHECK_ID} variant="outline-primary" type="submit">Check Me!</Button>
                            <Button id={BTN_HELPME_ID} variant="outline-secondary" onClick={onHelp}>Help Me!</Button>
                        </div>
                    </Col>
                </Form.Row>
            </Form>
        </>
    );
};

export default IrregularVerbExercise;
