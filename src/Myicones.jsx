import { Children } from "react";
import { Link } from "react-router-dom";

export default function Myicones(props) {
    return (<Link to={props.to} >
        <form className="flex pt-5 gap-x-2">
            <img src={props.src} alt={props.alt} />
            <button>{props.name}</button>
        </form>
    </Link>
    )
}