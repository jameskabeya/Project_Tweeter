export default function Myimage(props) {
    return (<section className="flex pt-2 gap-x-2">

               <img src={props.src} alt={props.alt} />
               <p htmlFor={props.id}>{props.name}</p>
            </section>
    )}