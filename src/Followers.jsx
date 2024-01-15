export default function Followers(props){
    return(
        <div>
            <div className="flex ">
                <img src={props.src} alt={props.alt} />
                <small>{props.names} </small>
                <p><strong>{props.name}</strong></p>
                <button className="bg-white color-black">{props.nam}</button>
            </div>
        </div>
    )
}