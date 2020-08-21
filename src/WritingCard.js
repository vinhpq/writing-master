import React from 'react'
import "./WritingCard.css";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
// import AttachFileIcon from '@material-ui/icons/AttachFile';

function WritingCard() {
    return (
        <div className="WritingCard">
            <div className="WritingCard__header">
                <p>The line graph gives information about the number of Iranian, Greek and Turkish students who enrolled at Sheffield University between 2005 and 2009. 
                        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>

                <div className="WritingCard__info">
                    <div className="WritingCard__category">
                        <h2>@IELTS Academic</h2>
                        <h2>#human #technology #lifestyle</h2>
                    </div>
                    <img src="https://www.ielts-exam.net/images/graphs/IELTS_Writing_Task_1_LineGraph-163.png" alt="" />
                    <h2>No due date!</h2>
                </div>
            </div>
            
            <div className="WritingCard__footer">
                <h2>Last score: 6.5</h2>
                <div className="WritingCard__status">
                    <CheckCircleOutlineIcon />
                    <h2>Last graded: 29-08-2020 6:30PM UST</h2>
                </div>
                <div className="WritingCard__attempts">
                    <PlaylistAddCheckIcon />
                    <h2>1 attempt</h2>
                </div>
            </div>
        </div>
    )
}

export default WritingCard
