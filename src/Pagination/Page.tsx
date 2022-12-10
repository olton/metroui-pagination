import React, {FC} from "react";
import classNames from "classnames";

interface IPageProps {
    title: number | string,
    value: number | string,
    isService?: boolean,
    extra?: string
}
const Page: FC<IPageProps> = ({
    value,
    title,
    isService = false,
    extra = ''
}) => {
    const classes = classNames(
        'page-item',
        value === '...' ? 'no-link' : '',
        extra
    )
    return (
        <li className={classes}>
            <a className="page-link" data-value={value}>{title}</a>
        </li>
    )
}

export default Page