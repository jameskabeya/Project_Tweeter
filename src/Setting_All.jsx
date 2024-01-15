export default function Setting(props){
    return (
        <div className=" ">
            <div className="flex justify-between bg-slate-600 rounded-3xl">
                <small>{props.name}</small>
                <img src={props.src} alt={props.alt} />
            </div>
        </div>
    )
}