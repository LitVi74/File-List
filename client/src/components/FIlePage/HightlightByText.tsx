interface IHightlightByText {
    filter?: string,
    text?: string,
    className?: string,
}

const HightlightByText= ({
                            filter,
                            text,
                            className
}: IHightlightByText) => {

    if (!filter || !text) return <p>{text?.trim() || "Empty file"}</p>

    const regexp = new RegExp(filter, 'ig')
    const matchValue = text.match(regexp)

    if (!matchValue) return <p>{text}</p>

    return (
        <p>
            {text.split(regexp)
                .map((textPert, index, array) => {
                    if (index < array.length - 1) {
                        const textFound = matchValue.shift()
                        return (
                            <>
                                {textPert}
                                <span className={className}>{textFound}</span>
                            </>
                        )
                    }
                    return textPert
                })}
        </p>
    )
};

export default HightlightByText;