import Allimage from "./Allimage"
import { Link } from "react-router-dom"
export default function HomeBack(props) {
    return (
        <Link to={props.to} >
            <div className=' flex w-full p-3 justify-between'>
                <img to='/' src="src/assets/Home.svg" alt="" />
                <Allimage src="src/assets/Timeline-Prop.svg" alt="Image" />
            </div>
        </Link>
    )
}