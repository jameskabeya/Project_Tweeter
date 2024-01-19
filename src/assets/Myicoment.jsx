export default function Myicoment(props) {
    return (<div className="flex">
        <img onClick={props.onClick} className={props.claces} src={props.src} alt={props.alt} />
        {props.children}
        <small htmlFor={props.id}>{props.name}</small>
    </div>
    )
}