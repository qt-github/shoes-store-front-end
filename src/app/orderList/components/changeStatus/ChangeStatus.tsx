import React from 'react';
import AsyncSelect from 'react-select/async';
import {StatusOption, statusOptions} from "@/app/orderList/components/changeStatus/data";

const ChangeStatus = (inputValue: string) => {
    return statusOptions.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const loadOptions = (
    inputValue: string,
    callback: (options: StatusOption[]) => void
) => {
    setTimeout(() => {
        callback(ChangeStatus(inputValue));
    }, 1000);
};

const AsyncSelectComponent = () => (
    <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />
);
AsyncSelectComponent.displayName = 'AsyncSelectComponent';

export default AsyncSelectComponent;