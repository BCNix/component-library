import classNames from "classnames"

export default function Badge({type, color, children, ...rest}){

    const allClassNames = classNames("badge", type, color)

    return(
        <span className={allClassNames}>{children}</span>
    )
}