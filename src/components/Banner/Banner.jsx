import { IoWarning, IoCloseCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

export default function Banner({status="success", children, ...rest}){

    const STATUS_CONFIG = {
        'success': {text: "Congratulations!", icon: <FaCheckCircle color="#34D399"/>},
        'warning': {text: "Attention!", icon: <IoWarning color="#FBBF24"/>},
        'error': {text: "There is a problem with your application", icon: <IoCloseCircle color="#F87171"/>},
        'neutral': {text: "Update available", icon: <HiInformationCircle color="#60A5FA"/>},
    }

    const { text, icon } = STATUS_CONFIG[status] ?? {text: 'Notice: Invalid status', icon: <HiInformationCircle color="#60A5FA"/>}

    console.log(text, icon)
    return(
        <>
            <div className={`banner ${status}`} {...rest}>
                <div className="status">{icon} {text}</div>
                {children ? <p>{children}</p> : null}
            </div>
        </>
    )
}


// Old code

//  let headlineText
//     let headlineIcon

//     if (status==="success"){
//         headlineText = "Congratulations!"
//         headlineIcon = <FaCheckCircle color="#34D399"/>
//     } else if(status==="warning"){
//         headlineText = "Attention"
//         headlineIcon = <IoWarning color="#FBBF24"/>
//     } else if(status==="error"){
//         headlineText = "There is a problem with your application"
//         headlineIcon = <IoCloseCircle color="#F87171"/>
//     } else if(status==="neutral"){
//         headlineText = "Update available"
//         headlineIcon = <HiInformationCircle color="#60A5FA"/>
//     } else {
//         headlineText = "Notice: Invalid status"
//         headlineIcon = <HiInformationCircle color="#60A5FA"/>
//     }

//     return(
//         <div className={`banner ${status}`} {...rest}>
//             <div className="status">{headlineIcon} {headlineText}</div>
//             {children ? <p>{children}</p> : null}
//         </div>
//     )