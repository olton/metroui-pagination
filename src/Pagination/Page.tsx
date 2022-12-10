import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";

interface IPageProps {
    title: number | string,
    value: number | string,
    isService?: boolean,
    extra?: string,
    onClick?: MouseEventHandler
}
const Page: FC<IPageProps> = ({
    value,
    title,
    extra = '',
    onClick
}) => {
    const classes = classNames(
        'page-item',
        value === '...' ? 'no-link' : '',
        extra
    )
    return (
        <li className={classes} onClick={onClick}>
            <a className="page-link" data-value={value}>{title}</a>
        </li>
    )
}

export default Page