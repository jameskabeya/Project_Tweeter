export default function Followers(props) {
    return (
        <div className={props.classes} >
            <div className="flex justify-between">
                <img className={props.clase} src={props.src} alt={props.alt} />
                <div className="ml-3">
                    <p className="flex"><strong>{props.name}</strong><img src={props.srce} alt="image" /></p>
                    <small>{props.names} </small>
                </div>
                <img src={props.set} />
                <button className="bg-white w-24 ml-3 rounded-3xl text-black">{props.nam}</button>
            </div>
        </div>
    )
}