import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../container';

const PhrasalVerbs = ({}) => {
    // /:exercise
    const { exercise } = useParams();
    const [verbs, setVerbs] = useState([]);
    const [studyVerb, setStudyVerb] = useState(null);
    const [answer, setAnswer] = useState([]);

    const fetchDataset = async () => {
        const ds = await Container.PhrasalVerbsService.getDataset(exercise);
        setVerbs(ds);
    };

    const getRandomVerbIndex = (length) => {
        return Math.floor(Math.random() * length);
    };

    const nextRandomVerb = () => {
        if (!verbs) {
            return;
        }
        const studyVerbId = getRandomVerbIndex(verbs.length);
        setStudyVerb(verbs[studyVerbId]);

        const fakeOne = getRandomVerbIndex(verbs.length);
        const fakeTwo = getRandomVerbIndex(verbs.length);
        const fakeThree = getRandomVerbIndex(verbs.length);
        const ans = [
            [verbs[fakeOne], verbs[fakeTwo]],
            [verbs[studyVerbId], verbs[fakeThree]]
        ];
        setAnswer(ans);
        buttonsReset();
    };

    const buttonWrongAnswer = (btn) => {
        btn.classList.add('btn-danger');
        btn.classList.remove('btn-outline-primary');
        btn.disabled = true;
    };

    const buttonsReset = () => {
        const buttons = document.querySelectorAll('button.btn-answer');
        buttons.forEach((btn) => {
            btn.classList.add('btn-outline-primary');
            btn.classList.remove('btn-danger');
            btn.disabled = false;
        });
    };

    const checkAnswer = (e) => {
        if (studyVerb.definition.ru.includes(e.target.value)) {
            nextRandomVerb();
        } else {
           buttonWrongAnswer(e.target);
        }
    };

    const toggleExamples = () => {
        const el = document.getElementById('examples');
        el.classList.toggle('d-none');
    };

    // On init
    useEffect(() => {
        fetchDataset();
    }, []);

    // Wait for verbs
    useEffect(() => {
        nextRandomVerb();
    }, [verbs]);

    return (
        <>
        {
            studyVerb
            ? <div className="container">
                    <div className="alert alert-success text-center clearfix">
                        <strong>{ studyVerb.verb }</strong>
                        <button className="btn btn-sm btn-info float-right" onClick={toggleExamples}>Примеры</button>
                    </div>
                    <div id="examples" className="d-none mb-2">
                        <ul>
                            { studyVerb.examples.map((ex) => <li>{ex}</li>) }
                        </ul>
                    </div>
                    <div className="container">
                        {
                            answer.map((row, rowIndex) => {

                                const firstAnswer = row[0].definition.ru[getRandomVerbIndex(row[0].definition.ru.length)];
                                const secondAnswer = row[1].definition.ru[getRandomVerbIndex(row[1].definition.ru.length)];

                                return (
                                    <div key={rowIndex} className="row">
                                        <div className="col-sm-6 mb-2">
                                            <button className="btn btn-outline-primary btn-block btn-answer" value={firstAnswer} onClick={checkAnswer}>
                                                { firstAnswer }
                                            </button >
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <button className="btn btn-outline-primary btn-block btn-answer" value={secondAnswer} onClick={checkAnswer}>
                                                { secondAnswer }
                                            </button >
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
            </div>
            : null
        }
        </>
    );
};

export default PhrasalVerbs;
