import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ComponentWrapper = ({ children }) => {
    return (
        <ol>
            {React.Children.map(children, (child) => {
                return <li>{child}</li>;
            })}
        </ol>
    );
};

const ComponentWrapper2 = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    console.log(arrayOfChildren);
    return React.Children.map(arrayOfChildren, (child) => {
        return React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", "") + 1 + ". "
        });
    });
};

ComponentWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
ComponentWrapper2.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentWrapper>
                <Component />
                <Component />
                <Component />
            </ComponentWrapper>
            <ComponentWrapper2>
                <Component2 />
                <Component2 />
                <Component2 />
            </ComponentWrapper2>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};
const Component2 = ({ num }) => {
    return <div>{num} Компонент списка</div>;
};
Component2.propTypes = {
    num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default ChildrenExercise;
