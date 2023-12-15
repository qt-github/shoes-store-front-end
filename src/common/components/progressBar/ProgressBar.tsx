import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

interface ProgressBarFunsProps {
    percentage:number;
}
const ProgressBarFuns = ({percentage}:ProgressBarFunsProps) => {
    return <ProgressBar className="wrapper-progress-bar"
                        barContainerClassName="container-progress-bar"
                        completedClassName="barCompleted-progress-bar"
                        labelClassName="label-progress-bar"
                        completed={percentage}/>;
};

export default ProgressBarFuns;