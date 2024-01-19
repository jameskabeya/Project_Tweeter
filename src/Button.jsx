import { Link } from "react-router-dom";

export default function Mybutton(props) {
    return (
        <Link to={props.to} >
            <div className="pt-5">
                <button id="Button" className='bg-blue-500  rounded-full'><strong>Tweet</strong></button>
            </div>
        </Link>
    )
} 