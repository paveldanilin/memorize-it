import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../container';

const PhrasalVerbs = ({}) => {
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
                    <div className="alert alert-success text-center"><strong>{ studyVerb.verb }</strong></div>
                    <div className="container">
                        {
                            answer.map((row, rowIndex) => {
                                return (
                                    <div key={rowIndex} className="row">
                                        <div className="col-sm-6 mb-2">
                                            <button  className="btn btn-outline-primary btn-block">

                                                    { row[0].definition.ru[getRandomVerbIndex(row[0].definition.ru.length)] }

                                            </button >
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <button  className="btn btn-outline-primary btn-block">

                                                    { row[1].definition.ru[getRandomVerbIndex(row[1].definition.ru.length)] }

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
