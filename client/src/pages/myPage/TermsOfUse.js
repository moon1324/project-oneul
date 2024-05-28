import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'
import S from './style';

const TermsOfUse = () => {
    return (
        <>
            <nav>
            <FontAwesomeIcon icon={faCircleXmark} />
            </nav>
            <S.PageTitle>
                <h2>서비스 이용 약관</h2>
            </S.PageTitle>   
            <div className="scrollContainer">
                

            </div>
        </>
    );
};

export default TermsOfUse;