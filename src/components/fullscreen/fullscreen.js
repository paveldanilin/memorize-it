import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Fullscreen = ({requestText, exitText}) => {

    const [mode, setMode] = useState(false);

    const isFullscreen = (doc) => {
        return doc.fullscreenElement ||
            doc.mozFullScreenElement ||
            doc.webkitFullscreenElement ||
            doc.msFullscreenElement;
    };

    const toggleFullScreen = (e) => {
        const doc = window.document;
        const docEl = doc.documentElement;

        const requestFullScreen = docEl.requestFullscreen ||
            docEl.mozRequestFullScreen ||
            docEl.webkitRequestFullScreen ||
            docEl.msRequestFullscreen;

        const cancelFullScreen = doc.exitFullscreen ||
            doc.mozCancelFullScreen ||
            doc.webkitExitFullscreen ||
            doc.msExitFullscreen;

        if(isFullscreen(doc)) {
            cancelFullScreen.call(doc).then(() => setMode(false));
        } else {
            requestFullScreen.call(docEl).then(() => setMode(true));
        }
    };

    return (
        <button className="btn btn-sm btn-link text-light" onClick={ toggleFullScreen }>
            { mode ? exitText : requestText }
        </button>
    );
};

Fullscreen.propType = {
    requestText: PropTypes.string.isRequired,
    exitText: PropTypes.string.isRequired
};

export default Fullscreen;
