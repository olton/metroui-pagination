import React, {cloneElement, FC, MouseEventHandler} from "react"

import "./Pagination.less"
import classNames from "classnames";
import Page from "./Page";
import page from "./Page";

export enum PAGINATION_POSITION {
    LEFT = 'pos-left',
    RIGHT = 'pos-right',
    CENTER = 'pos-center',
    DEFAULT = 'pos-default',

}

interface IPaginationProps {
    className?: string,
    total: number,
    current: number,
    itemsPerPage: number,
    distance: number,
    spaces: string,
    prevTitle: string,
    nextTitle: string,
    rounded: boolean,
    gap: boolean,
    position: PAGINATION_POSITION,
    onClick: MouseEventHandler
}

const Pagination: FC<IPaginationProps> = ({
    className,
    total = 0,
    current = 0,
    distance = 0,
    itemsPerPage = 0,
    prevTitle = "Prev",
    nextTitle = "Next",
    rounded= false,
    gap= true,
    position = PAGINATION_POSITION.DEFAULT,
    onClick,
    ...props
}) => {
    const classes = classNames(
        'pagination',
        rounded ? 'rounded-buttons' : '',
        position,
        !gap ? 'no-gap' : '',
    )

    const handleClick: MouseEventHandler<HTMLElement> = (e) => {
        // const val = e.target.getAttribute("data-value");
        console.log(e)
        onClick && onClick(e)
    }

    const pagesCount = itemsPerPage === -1 ? 1 : Math.ceil(total / itemsPerPage)
    const items :any[] = []

    const addNoLink =()=>{
        items.push(<Page title={"..."} value={"..."} extra={"no-link"}/>)
    }
    const addItems = (from: number, to: number, current: number) => {
        for(let i = from; i <= to; i++) {
            items.push(<Page title={i} value={i} extra={current === i ? 'active' : ''}/>)
        }
    }

    items.push(<Page title={prevTitle} value="prev" extra={`service prev-page ${current === 1 ? 'disabled' : ''}`}/>)
    items.push(<Page title={1} value="1" extra={current === 1 ? 'active' : ''}/>)

    if (distance === 0 || pagesCount <= 7) {
        addItems(2, pagesCount, current)
    } else {
        if (current < distance) {
            addItems(2, distance, current)
            if (pagesCount > distance) {
                addNoLink()
            }
        } else if (current <= pagesCount && current > pagesCount - distance + 1) {
            if (pagesCount > distance) {
                addNoLink()
            }
            addItems(pagesCount - distance + 1, pagesCount - 1, current)
        } else {
            addNoLink()
            addItems(current - Math.floor(distance/2), current + Math.floor(distance/2), current)
            addNoLink()
        }
    }

    if (pagesCount > 1 || current < pagesCount) {
        items.push(<Page title={pagesCount} value={pagesCount} extra={`${current === pagesCount ? 'active' : ''}`} />)
    }
    items.push(<Page title={nextTitle} value="next" extra={`service next-page ${current === pagesCount ? 'disabled' : ''}`}/>)

    return (
        <nav className={classes} {...props}>
            <ul>
                {items.map( (el, index) => {
                    return cloneElement(el, {
                        key: index,
                        onClick: handleClick
                    })
                } )}
            </ul>
        </nav>
    )
}

export default Pagination