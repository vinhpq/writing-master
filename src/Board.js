import React from 'react'
import "./Board.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import WritingCard from "./WritingCard";

function Board() {
    return (
        <div className="board">
            {/* <div className="board__header">
                <div className="board__headerLeft">
                    <div className="board__headerSearch">
                        <SearchIcon  />
                        <input placeholder="Search all writings" />
                    </div>
                </div>

                <div className="board__headerRight">
                    <Button>Submit</Button>
                    <Button>Save</Button>
                    <Button>Discard</Button>
                </div>
            </div> */}

            <div className="board__container">
                <WritingCard />
                <WritingCard />
                <WritingCard />
                <WritingCard />
                <WritingCard />
                <WritingCard />
            </div>
        </div>
    )
}

export default Board
