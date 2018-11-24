import React from "react";
import Auxi from "../../HOC/Auxi";


const template = (props) => (
    <Auxi>

    <div>Naviguation</div>

    <main>
    {props.children}
    </main>

    </Auxi>
)

export default template;