import React from 'react';
import Image from "next/image";

interface ButtonIconTextProps {
    icon: any;
    text: string;
}

const ButtonIconText = ({icon, text}:ButtonIconTextProps) => {
    return (
        <div className={"button-icon-text-container"}>
            <div className={"icon-button-icon-text"}>
                <Image src={icon}
                       alt={"icon"}
                />
            </div>
            <div className={"text-button-icon-text"}>
                {text}
            </div>
        </div>
    );
};

export default ButtonIconText;