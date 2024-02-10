import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './css/button.scss'

const Button = (props) => {
    const style = {
        button : {
            borderRadius : props.radius
        }
    }
    return (
        <Link className="myButton rounded" to={props.to} style={style.button}>
            <span className="text-black">{props.title}</span>
            <FontAwesomeIcon className="icon" icon={props.icon} />
        </Link>
    )
}

export default Button