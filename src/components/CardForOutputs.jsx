import React from "react";

import Button from "./Button";

function CardForOutputs({ title, description }) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{description}</p>
            <Button btn="🗑️" />
        </div>
    );
}

export default CardForOutputs;

