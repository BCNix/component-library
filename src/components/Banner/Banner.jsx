import classNames from "classnames"
import { IoWarning, IoCloseCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

export default function Banner({status="success", children, ...rest}){

    // const allClassNames = classNames("banner", headline)

    let headlineText
    let headlineIcon

    if (status==="success"){
        headlineText = "Congratulation!"
        headlineIcon = <FaCheckCircle color="#34D399"/>
    } else if(status==="warning"){
        headlineText = "Attention"
        headlineIcon = <IoWarning color="#FBBF24"/>
    } else if(status==="error"){
        headlineText = "There is a problem with your application"
        headlineIcon = <IoCloseCircle color="#F87171"/>
    } else if(status==="neutral"){
        headlineText = "Update available"
        headlineIcon = <HiInformationCircle color="#60A5FA"/>
    }

    const headline= headlineText

    return(
        <span className={`banner ${status}`} {...rest}> {headlineIcon} {headline} {children}</span>
    )
}