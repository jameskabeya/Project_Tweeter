export default function Myicoment(props) {
    return (<div className="flex">
        {props.children}
        <svg width="24" onClick={props.onClick} className={props.claces} height="24" viewBox={props.viewBoxIcon} fill="none" xmlns="http://www.w3.org/2000/svg">
            {props.children}
        </svg>
        <small >{props.name}</small>
    </div>
    )
}
