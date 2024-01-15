export default function Small(props) {
    return (
        <div className="flex">
            <img src={props.src} alt={props.alt} />
            <small>{props.name}</small>
        </div>
    )
}