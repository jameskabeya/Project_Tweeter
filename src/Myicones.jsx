export default function Myicones(props) {
    return (<section className="flex text-3xl pt-5 gap-x-2">
        <img src={props.src} alt={props.alt} />
        <button htmlFor={props.id}>{props.name}</button>
    </section>
    )
}