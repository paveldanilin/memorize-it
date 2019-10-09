import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button, Collapse} from "react-bootstrap";

function highlightWord(sentence, highlightWords) {
    return highlightWords.reduce(
        (processedSentence, curWord) => processedSentence.replace(curWord, `&lt;mark&gt;${ curWord }&lt;/mark&gt;`)
    );
}

function createMarkup(htmlString) {
    return { __html: htmlString };
}

function renderExampleSentence(index, example, highlightsWords) {
    return (
        <li
            key={index}
            className="list-group-item"
            dangerouslySetInnerHTML={ createMarkup(highlightWord(example, highlightsWords)) }
        />
    );
}

const UsageExamples = ({ examples, highlights }) => {
    const [open, setOpen] = useState(false);

    if (! Array.isArray(examples) || examples.length === 0) {
        return null;
    }

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="usage-example-list"
                aria-expanded={open}
            >
                Show examples
            </Button>
            <Collapse in={open}>
                <ul id="usage-example-list" className="list-group">
                    { examples.map((example, index) => renderExampleSentence(index, example, highlights || [])) }
                </ul>
            </Collapse>
        </>
    );
};

UsageExamples.propTypes = {
    examples: PropTypes.arrayOf(PropTypes.string),
    highlights: PropTypes.arrayOf(PropTypes.string)
};

export default UsageExamples;
