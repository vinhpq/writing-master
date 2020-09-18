import React from 'react'
import "./WritingCard.css";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
// import AttachFileIcon from '@material-ui/icons/AttachFile';
import { Card, CardContent, Typography } from "@material-ui/core";
import TextTruncate from "react-text-truncate";

function WritingCard({ topic, exam_category, topic_category, image, grading_status, attempts }) {
    return (
        <Card className="writingCard">
            <CardContent className="writingCard__content">
                <Typography className="writingCard__header" color="textSecondary">
                    <TextTruncate
                        line={3}
                        element="p"
                        truncateText="..."
                        text={topic}
                    />
                </Typography>

                <Typography className="writingCard__info" color="textSecondary">
                    <Typography className="writingCard__category">
                        <h2>{exam_category}</h2>
                        <h2>{topic_category}</h2>
                    </Typography>
                    <img src={image} alt="" />
                </Typography>

                

            </CardContent>

            <CardContent className="writingCard__footer">
                <Typography className="writingCard__status" color="textSecondary">
                    <CheckCircleOutlineIcon />
                    <h2>{grading_status}</h2>
                </Typography>

                <Typography className="writingCard__attempts">
                    <PlaylistAddCheckIcon />
                    <h2>{attempts}</h2>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default WritingCard
