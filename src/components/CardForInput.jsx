import React from "react";

import Inputs from "./Inputs";
import Button from "./Button";

const fromName = [
    {
        name: "Title",
        btn: "🗑️",
    },
    {
        name: "Take a note...",
        btn: "+",
    }
];

function CardForInput() {
    return (
        <form action="" className="create-note">
            {fromName.map((item, index) => (
                <div key={index} className="input-group">
                    <Inputs name={item.name} />
                    <Button btn={item.btn} />
                </div>
            ))}
        </form>
    );
}

export default CardForInput;