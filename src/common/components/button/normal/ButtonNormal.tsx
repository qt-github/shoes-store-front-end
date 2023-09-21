import React from 'react';

interface ButtonNormalProps {
    text: string;
    onClick?: () => void;
}

const ButtonNormal = ({text,onClick}:ButtonNormalProps) => {
    return (
        <div className={"btn-normal-container"}>
            <button  onClick={onClick} className={"btn-normal"}>
                {text}
            </button>
        </div>
    );
};

export default ButtonNormal;