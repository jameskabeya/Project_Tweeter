export default function Myicoment(props) {
    return (<div className="flex">
               <img src={props.src} alt={props.alt} />
               <small htmlFor={props.id}>{props.name}</small>
            </div>
    )}