import React from "react";

interface ITitle {
    titleText: string;
    titleClass: string;
}

const Title = ({titleText, titleClass}: ITitle) => {
    return (
        <h1 className={titleClass}>
            {titleText}
        </h1>
    );
};

export default Title;