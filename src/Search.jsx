export default function Search(props) {
    return (
        <div className="bg-gray-900 rounded-3xl">
            <div className="flex h-19">
                <img src="src/assets/Search.svg" alt="" />
                <input className="rounded-3xl h-18 outline-transparent bg-gray-900" placeholder="Search twitter" type="text" />
            </div>
        </div>
    )
}