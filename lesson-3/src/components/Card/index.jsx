import React from 'react';  
import './styles.css';
import taskSettingIcon from '../../assets/icons/Icon__Edit.svg';
import taskAttachmentIcon from '../../assets/icons/Icon__Paperclip.svg';
import taskPriorityIcon from '../../assets/icons/Icon__Flag.svg';
import taskDeadlineIcon from '../../assets/icons/Icon__Clock.svg';


const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <div className="task-name">{props.taskName}</div>
                    <div><img src={taskSettingIcon} alt="Task Setting Icon" className="task-icon" /></div>
                </div>
                <div className="task-info">{props.taskInfo}</div>
                <div className="assignee">{props.assignee}</div>
            </div>
            <div className="card-footer">
                <div className="card-footer-info">
                    <div className="task-attachment">
                        <img src={taskAttachmentIcon} alt="Task Attachment Icon" />
                        <div>{props.attachmentCount}</div>
                    </div>
                    <div className="task-priority">
                        <img src={taskPriorityIcon} alt="Task Priority Icon" />
                    </div>
                    <div className="task-deadline">
                        <img src={taskDeadlineIcon} alt="Task Deadline Icon" />
                        <div>{props.taskDeadline}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;