export default function Setting(props){
    return (
        <div className=" ">
            <div className="flex justify-between">
                <small>{props.name}</small>
                <img src={props.src} alt={props.alt} />
            </div>
        </div>
    )
}