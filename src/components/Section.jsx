import React from "react";

import CardForInput from "./CardForInput";
import CardForOutputs from "./CardForOutputs";

function Section() {
    return (
        <>
            <CardForInput />
            <div className="notes">
                <CardForOutputs title="Title" description="Description" />
            </div>
        </>
    );
}

export default Section;
