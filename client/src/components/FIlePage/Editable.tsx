import React, {useCallback, useState} from "react";

interface IEditable {
    isEditingProps?: boolean,
    value?: string,
    callback?: (value: string) => void
}

const Editable = ({
    isEditingProps = false,
    value = "",
    callback
}: IEditable) => {
    const [isEditing, setEditing] = useState<boolean>(isEditingProps);
    const [textareaValue, setTextareaValue] = useState<string>(value);

    const handleDivBlur = useCallback(() => {
        setEditing(!isEditing)
        callback?.(textareaValue);
    },[textareaValue])

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
                    onClick={() => setEditing(!isEditing)}>
                    <p>{textareaValue}</p>
                </div>
        )}
        </>
    );
};

export default Editable;