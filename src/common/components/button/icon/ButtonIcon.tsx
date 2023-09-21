import React from 'react';

interface ButtonIconProps {
    icon: any;
    type?: "button" | "submit" | "reset" | undefined;
}

const ButtonIcon = ({icon, type}:ButtonIconProps) => {
    return (
        <div className={"btn-icon-container"}>
            <button className={"btn-icon"}
                    type={type}
            >
                {icon}
            </button>
        </div>
    );
};

export default ButtonIcon;