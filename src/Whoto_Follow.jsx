export default function Who_Follow(props) {
    return (
        <div className={props.classes} >
            <div className="flex p-3 justify-between">
                <img className="w-20 rounded-full" src={props.src} alt={props.alt} />
                <div className="ml-3">
                    <h2><strong>ORIZON_24</strong></h2>
                    <div>
                        <button><strong>Follow</strong></button>
                    </div>
                    <p className="flex">{props.paraph}</p>
                </div>
                <p>{props.nom}</p>
            </div>
        </div>
    )
}