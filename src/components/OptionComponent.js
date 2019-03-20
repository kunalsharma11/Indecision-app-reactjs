import React from 'react';

const OptionComponent = (props) => {
    return (
    <div className="optioncomponent">
            <p className="optioncomponent__text">{props.count}.{props.optionText}</p>
            <button 
            className="button button--link"
            onClick={(e)=>{
                props.handleDeleteOption(props.optionText);
            }}>remove</button>
    </div>);
};
export default OptionComponent;