import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const [otherState, setOtherState] = useState(false);
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                toggle Other State
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
