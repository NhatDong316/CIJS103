import React from 'react';  
import './style.css';
import boardSettingIcon from '../../assets/icons/Icon__Board__Setting.svg';

const BoardHeader = (props) => {
    return (
        <div className="boardHeader">
            <div className="boardHeader-title">
                <div className="boardType">{props.boardType}</div>
                <div className="roundIcon cardCount">{props.cardCount}</div>
            </div>
            <div className="boardHeader-setting">
                <div className="roundIcon addCard"><span>+</span></div>
                <img src={boardSettingIcon} alt="Board Setting Icon" />
            </div>
        </div>
    )
}

export default BoardHeader;