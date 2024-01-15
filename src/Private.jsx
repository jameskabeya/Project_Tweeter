export default function Private(props) {
    return (
        <div className={props.classes} >
            <div className="flex justify-between">
            <img className={props.clase} src={props.src} alt={props.alt} />
                <div className="ml-3">
                    <p className="flex"><strong>{props.name}</strong><img src={props.srce} alt="image" /></p>
                    <small>{props.names} </small>
                </div>
                <img src={props.set} />
            </div>
        </div>
    )
}