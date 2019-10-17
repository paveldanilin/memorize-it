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

function renderWordInput(id, word, description, transcription, onChange) {
    return (
        <Col>
            <Form.Group>
                <Form.Control
                    id={id}
                    type="text"
                    value={ word }
                    onChange={ onChange }/>
                { transcription
                    ? <Form.Text className="text-muted"><code>[{ transcription }]</code></Form.Text>
                    : <Form.Text>&nbsp;</Form.Text>
                }
                <Form.Text className="text-muted">{ description }</Form.Text>
            </Form.Group>
        </Col>
    );
}

const IrregularVerbs = ({}) => {

    const BTN_NEXT_ID = 'btn-next';
    const BTN_HELP_ID = 'btn-help';

    // TODO: it's weir
    const hintNumber = Math.floor(Math.random() * 4) + 1;

    const [verb, setVerb] = useState(irregularWordService.getRandom);

    const [infinitiveInput, setInfinitiveInput] = useState(hintNumber === 1 ? verb.infinitive : '');
    const [pastSimpleInput, setPastSimpleInput] = useState(hintNumber === 2 ? verb.pastSimple : '');
    const [pastParticipleInput, setPastParticipleInput] = useState(hintNumber === 3 ? verb.pastParticiple : '');

    const [infinitiveSuccess, setInfinitiveSuccess] = useState(false);
    const [pastSimpleSuccess, setPastSimpleSuccess] = useState(false);
    const [pastParticipleSuccess, setPastParticipleSuccess] = useState(false);

    const isSuccess = () => {
        return infinitiveSuccess && pastSimpleSuccess && pastParticipleSuccess;
    };

    const setNextFocus = () => {
        if (isSuccess()) {
            return;
        }

        if (!infinitiveSuccess) {
            document.getElementById('infinitive').focus();
            return;
        }

        if (!pastSimpleSuccess) {
            document.getElementById('pastSimple').focus();
            return;
        }

        if (!pastParticipleSuccess) {
            document.getElementById('pastParticiple').focus();
        }
    };

    const onNext = (e) => {
        e.preventDefault();

        document.getElementById('infinitive').classList.remove('is-valid');
        document.getElementById('infinitive').disabled = false;
        document.getElementById('pastParticiple').classList.remove('is-valid');
        document.getElementById('pastParticiple').disabled = false;
        document.getElementById('pastSimple').classList.remove('is-valid');
        document.getElementById('pastSimple').disabled = false;

        setInfinitiveSuccess(false);
        setPastSimpleSuccess(false);
        setPastParticipleSuccess(false);

        const verb = irregularWordService.getRandom();
        setVerb(verb);
        const hintNumber = Math.floor(Math.random() * 4) + 1;

        setInfinitiveInput(hintNumber === 1 ? verb.infinitive : '');
        setPastSimpleInput(hintNumber === 2 ? verb.pastSimple : '');
        setPastParticipleInput(hintNumber === 3 ? verb.pastParticiple : '');
    };

    const onHelp = (e) => {
        setInfinitiveInput(verb.infinitive);
        setPastSimpleInput(verb.pastSimple);
        setPastParticipleInput(verb.pastParticiple);
    };

    useEffect(() => {
        if (infinitiveInput === verb.infinitive) {
            document.getElementById('infinitive').classList.add('is-valid');
            document.getElementById('infinitive').disabled = true;
            setInfinitiveSuccess(true);
        }
    }, [infinitiveInput]);

    useEffect(() => {
        if (pastSimpleInput === verb.pastSimple) {
            document.getElementById('pastSimple').classList.add('is-valid');
            document.getElementById('pastSimple').disabled = true;
            setPastSimpleSuccess(true);
        }
    }, [pastSimpleInput]);

    useEffect(() => {
        if (pastParticipleInput === verb.pastParticiple) {
            document.getElementById('pastParticiple').classList.add('is-valid');
            document.getElementById('pastParticiple').disabled = true;
            setPastParticipleSuccess(true);
        }
    }, [pastParticipleInput]);


    useEffect(() => {
        if (isSuccess()) {
            const nextButton = document.getElementById(BTN_NEXT_ID);
            if (nextButton) {
                nextButton.focus();
            }
        }
        setNextFocus();
    }, [infinitiveSuccess, pastSimpleSuccess, pastParticipleSuccess]);

    return (
        <>
            { renderImage(verb.img) }

            { renderNativeWord(verb.locale.ru || verb.infinitive) }

            { renderExamples(verb.examples, [verb.infinitive]) }

            <Form autoComplete="off">
                <Form.Row>
                    { renderWordInput(
                        'infinitive',
                        infinitiveInput,
                        'Infinitive',
                        infinitiveSuccess && verb.transcription ? verb.transcription[0] : undefined,
                        (e) => setInfinitiveInput(e.target.value.toLowerCase().trim()))
                    }
                    { renderWordInput(
                        'pastSimple',
                        pastSimpleInput,
                        'Past simple',
                        pastSimpleSuccess && verb.transcription ? verb.transcription[1] : undefined,
                        (e) => setPastSimpleInput(e.target.value.toLowerCase().trim()))
                    }
                    { renderWordInput(
                        'pastParticiple',
                        pastParticipleInput,
                        'Past participle',
                        pastParticipleSuccess && verb.transcription ? verb.transcription[2] : undefined,
                        (e) => setPastParticipleInput(e.target.value.toLowerCase().trim()))
                    }
                </Form.Row>

                <Form.Row><Col>&nbsp;</Col></Form.Row>

                <Form.Row>
                    <Col className="text-center">
                        <div className="btn-group">
                            { isSuccess()
                                ? <Button id={BTN_NEXT_ID} variant="outline-primary" onClick={ onNext }>&#8594;</Button>
                                : null
                            }
                            { !isSuccess()
                                ? <Button id={BTN_HELP_ID} variant="outline-secondary" onClick={ onHelp }>Подсказка</Button>
                                : null
                            }
                        </div>
                    </Col>
                </Form.Row>
            </Form>
        </>
    );
};

export default IrregularVerbs;
