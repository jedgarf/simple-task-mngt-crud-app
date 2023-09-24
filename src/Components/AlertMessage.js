import React from 'react';

// Bootstrap Components
import { Alert } from 'react-bootstrap';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faClose } from '@fortawesome/free-solid-svg-icons';

const AlertMessage = ({ type, message, setMessage, messageText }) => {
    return (
        <>
        {message ?
            (<Alert variant={type}>
                <FontAwesomeIcon icon={faInfoCircle} /> {messageText}
            </Alert>)
         : ("")}
            
        </>
    );
};

export default AlertMessage;