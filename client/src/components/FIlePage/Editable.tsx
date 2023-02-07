import React, {useCallback, useEffect, useState} from "react";
import HightlightByText from "./HightlightByText";

interface IEditable {
    isEditingProps?: boolean,
    value?: string,
    callback?: (value: string) => void,
    filter?: string;
}

const Editable = ({
    isEditingProps = false,
    value = "",
    callback,
    filter
}: IEditable) => {
    const [isEditing, setEditing] = useState<boolean>(isEditingProps);
    const [textareaValue, setTextareaValue] = useState<string>(value);

    const handleDivBlur = useCallback(() => {
        setEditing(!isEditing)
        callback?.(textareaValue);
    },[textareaValue])

    useEffect(() => console.log(filter), [filter])

    return (
        <>
        {isEditing ? (
                <div
                    onBlur={handleDivBlur}
                >
                    <textarea
                        onChange={(event) => setTextareaValue(event.currentTarget.value)}
                        value={textareaValue}
                    />
                </div>
            ): (
                <div
                    onClick={() => setEditing(!isEditing)}
                >
                    <HightlightByText filter={filter} text={value}/>
                </div>
        )}
        </>
    );
};

export default Editable;