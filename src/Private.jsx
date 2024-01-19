import { Link } from "react-router-dom";

export default function Private(props){
    return (
        <Link to={props.to}>
            <div className={props.classes} id="private" >
                <div className="flex gap-2 justify-between">
                    <img className={props.clase} src={props.src} alt={props.alt} />
                    <div>
                        <p className="flex justify-between"><strong>{props.name}</strong><img src={props.srce} alt="image" /></p>
                        <small>{props.names} </small>
                    </div>
                    <img src={props.set} />
                </div>
            </div>
        </Link>
    )
}