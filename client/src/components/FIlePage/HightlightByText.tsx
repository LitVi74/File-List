interface IHightlightByText {
    filter?: string,
    text?: string,
}

const HightlightByText= ({filter, text}: IHightlightByText) => {

    if (!filter || !text) return <p>{text}</p>

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
                                <span style={{background: "yellow"}}>{textFound}</span>
                            </>
                        )
                    }
                    return textPert
                })}
        </p>
    )
};

export default HightlightByText;