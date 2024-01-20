import All_icones from "./Allicones"
import Allimage from "./Allimage"

export default function Timeline() {
    return (
        <div className='pt-5 p-2 border-y border-slate-800  text-white '>
            <div className='flex sticky top-0'>
                <Allimage src="src/assets/Profile-Fill.svg" alt="Images du jour" />
                <textarea className='bg-black text-silver resize-none' placeholder='Whats happening' name="" id="" cols="50" rows="1"></textarea>
            </div>
            <div className=' flex justify-between'>
                <div className='flex gap-3 pt-8'>
                    <All_icones src="src/assets/Media.svg" />
                    <All_icones src="src/assets/Gif.svg" />
                    <All_icones src="src/assets/Poll.svg" />
                    <All_icones src="src/assets/Emoji.svg" />
                    <All_icones src="src/assets/Schedule.svg" />
                </div>
                <div className='pt-8'>
                    <button className=' rounded-full w-20 bg-blue-500'>Tweet</button>
                </div>
            </div>
        </div>
    )
}