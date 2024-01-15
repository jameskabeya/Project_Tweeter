export default function Search(props) {
    return (
        <div className="bg-slate-600 rounded-3xl">
            <div className="flex h-19">
                <img src="src/assets/Search.svg" alt="" />
                <input className="rounded-3xl outline-transparent bg-slate-600" placeholder="Searc twitter" type="text" />
            </div>
        </div>
    )
}