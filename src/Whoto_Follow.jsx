export default function Who_Follow(props) {
    return (
        <div className="">
            <div className="flex p-3 ml-8 gap-1">
                <img src="src/assets/Profile-Fill.svg" alt="" />
                <small>Lorem ipsum dolor sit amet.</small>
            </div>
            <div className="p-3">
                <div className="ml-3 flex">
                    <img className="w-20 rounded-full" src={props.src} alt={props.alt} />
                    <div className="">
                        <h2><strong>ORIZON_24</strong></h2>
                        <br /> <small>@wekeleaksAfrica24</small>
                    </div>
                    <div className="ml-80">
                        <button className="bg-white rounded-full w-24 h-10 text-black"><strong>Follow</strong></button>
                    </div>
                </div>
                <div className="ml-10">
                    <p>compte profesionnel du site informatique Generale en R D Congo et dans le monde. Horizon_24 l'information c'est chaque jour</p>
                </div>
            </div>
        </div>
    )
}