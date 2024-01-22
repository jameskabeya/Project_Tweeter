import { Link } from "react-router-dom"
import Allimage from "./Allimage"
export default function Homeline(props) {
    return (
        <Link to={props.to} >
            <div className='text-white flex w-full p-3 justify-between'>
                <h2 to='/' className='font-bold'>Home</h2>
                <Allimage src="src/assets/Timeline-Prop.svg" alt="Image" />
            </div>
        </Link>
    )
}