import React from "react";
import PropTypes from "prop-types";
import './LinkedinEmbebed.css'

const LinkedinEmbebed = ({ embedId }) => (
    <div>
        <iframe 
            width="560"
            height="500"
            src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        ></iframe>
    </div>
);

LinkedinEmbebed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default LinkedinEmbebed;