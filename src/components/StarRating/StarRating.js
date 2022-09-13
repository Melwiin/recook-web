import React from "react";
import './StarRating.css'

export default function StarRating(props) {

    return(
        <div className="results">
            <div className="results-content">
                <span className="stars">
                    <span style={{width: Math.max(0, (Math.min(5, props.value))) * 36.5}}></span>
                </span>
            </div>
        </div>
    );
}