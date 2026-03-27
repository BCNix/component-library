import classNames from "classnames"

export default function Badge({type="square", color="grey" , children, ...rest}){

    const allClassNames = classNames("badge", type, color)

    return(
        <span className={allClassNames} {...rest}>{children}</span>
    )
}