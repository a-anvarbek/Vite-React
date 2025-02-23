import React from "react";

import CardForInput from "./CardForInput";
import CardForOutputs from "./CardForOutputs";

function Section() {

    const notes = [{title:"hello 1", description: "hello"}, {title:"hello 1", description: "hello"}]
    return (
        <>
            <CardForInput />
            <div className="notes">
                {
                    notes.map((note, index) => {
                        return <CardForOutputs key={index} title={note.title} description={note.description} />
                    })
                }
                
            </div>
        </>
    );
}

export default Section;