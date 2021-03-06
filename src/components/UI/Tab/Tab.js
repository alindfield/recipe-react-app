import React from 'react';
import './Tab.css';

export const Tab = (props) => {

    const childrenWithProps = React.Children.map(props.children, child =>
        React.cloneElement(child, {selectedId: props.selectedId, onClick: props.onClick})
    );

    return (
        <div>
            <div className="tab" />
            <div className="tab-line" >
                {childrenWithProps}
            </div>
        </div>
    );

};

export const TabItem = (props) => {

    const style = props.id === props.selectedId ? "tab-item" : "tab-item-hidden";
    const click = props.id === props.selectedId ? null : () => props.onClick(props.id);

    return (
        <div key={props.key} onClick={click} className={style}>{props.label}</div>
    );
    
};