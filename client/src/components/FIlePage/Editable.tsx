import React, {useCallback, useEffect, useRef, useState} from "react";

interface IEditable {
    isEditingProps?: boolean,
    value?: string,
    callback?: (value: string) => void,
    children?: JSX.Element;
    textClassName?: string;
    textAreaClassName?: string;
}

const Editable = ({
    isEditingProps = false,
    value = "",
    callback,
    children,
    textClassName,
    textAreaClassName,
}: IEditable) => {
    const [isEditing, setEditing] = useState<boolean>(isEditingProps);
    const [textareaValue, setTextareaValue] = useState<string>(value);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleTextAreaBlur = useCallback(() => {
        setEditing(false)
        callback?.(textareaValue);
    },[textareaValue, callback])

    const handleDivClick = useCallback(() => {
        setEditing(true);
    },[])

    useEffect(() => {
        if (isEditing) textAreaRef.current?.focus()
    }, [isEditing])

    return (
        <>
        {isEditing ? (
                <textarea
                    ref={textAreaRef}
                    onBlur={handleTextAreaBlur}
                    onChange={(event) => setTextareaValue(event.currentTarget.value)}
                    value={textareaValue}
                    className={textAreaClassName}
                />
            ): (
                <div
                    className={textClassName}
                    onClick={handleDivClick}
                >
                    {children}
                </div>
        )}
        </>
    );
};

export default Editable;