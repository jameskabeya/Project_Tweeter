import Allimage from "./Allimage"
export default function Homeline() {
    return (
        <div className='text-white flex w-full p-3 justify-between'>
            <h2 className='font-bold'>Home</h2>
            <Allimage src="src/assets/Timeline-Prop.svg" alt="Image" />
        </div>
    )
}