import React, { useState, useEffect } from 'react'
import "./Board.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import WritingCard from "./WritingCard";
import db from "./firebase";
import { useHistory } from 'react-router-dom';

function Board() {

    const history = useHistory();

    const [writings, setWritings] = useState([]);

    useEffect(() => {
        db.collection('writings').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data()));
            setWritings(snapshot.docs.map(doc => ({
                id: doc.id,
                topic: doc.data().topic,
                exam_category: doc.data().exam_category,
                topic_category: doc.data().topic_category,
                grading_status: doc.data().grading_status,
                attempts: doc.data().attempts
            })))
        })
        
    }, []);
    
    return (
        <div className="board">
            <div className="board__container">
                {writings.map((writing) => (
                    <WritingCard 
                        topic={writing.topic}
                        exam_category={writing.exam_category}
                        topic_category={writing.topic_category}
                        grading_status={writing.grading_status}
                        attempts={writing.attempts} 
                    />
                ))}
                {/* <WritingCard />
                <WritingCard />
                <WritingCard />
                <WritingCard />
                <WritingCard />
                <WritingCard /> */}
            </div>
        </div>
    )
}

export default Board
