import React from "react";

import "./styles.css";

function Result(props) {
    if (props.correct === null) {
        return (
            <div className="result">
                <div className="spans">
                    <span className="startgame">
                        Try to click on an image that you haven't before. The
                        images will shuffle after you click.
                    </span>
                    <span className="quote">"Be careful not to choke on your convictions."</span>
                </div>
            </div>
        );
    } else if (props.correct === "win") {
        return (
            <div className="result">
                <div className="spans">
                    <span className="win">You win!</span>
                    <span className="quote">"You were right. You were right about me."</span>
                    <span>Click and image to play again!</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="result">
                {props.correct ? (
                    <div className="spans">
                        <span className="correct">Correct!</span>
                        <span className="quote">
                            "The force is strong with this one!"
                        </span>
                    </div>
                ) : (
                    <div className="spans">
                        <span className="wrong">Try again</span>
                        <span className="quote">
                            "You have failed me for the last time."
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default Result;
