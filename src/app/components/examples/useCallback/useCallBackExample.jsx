import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // without callback
    const validateWithOutCallBack = (data) => {
        console.log("WithOutCallBack", data);
    };
    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);

    // with callback
    const validateWithCallBack = useCallback((data) => {
        console.log("WithCallBack", data);
    }, []);
    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render with Out Call Back: {withOutCallBack.current}</p>
            <p>Render with Call Back: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
