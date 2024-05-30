import { faFaceAngry, faFaceSadTear, faFaceSmile, faHeart, faMessage, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Reaction = () => {
    return (
        <div>
            <div>
                <FontAwesomeIcon icon = {faMessage} className='comment'/>
            </div>
            <ul>
                <li><FontAwesomeIcon icon = {faHeart} className='heart'/></li>
                <li><FontAwesomeIcon icon = {faThumbsUp} className='thumbsUp'/></li>
                <li><FontAwesomeIcon icon = {faFaceSmile} className='smile'/></li>
                <li><FontAwesomeIcon icon = {faFaceSadTear} className='sad'/></li>
                <li><FontAwesomeIcon icon = {faFaceAngry} className='angry'/></li>
            </ul>
        </div>
    );
};

export default Reaction;