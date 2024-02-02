import { useState } from "react"
import All_icones from "./Allicones"
import Allimage from "./Allimage"
import axios from "axios"

export default function Timeline() {

    const [image, setImage] = useState('')
    function toUpload(e){
        console.log(e.target.files);
        setImage(e.target.files[0])
    }
    function handlerSubmit(){
        const formData = new FormData()
        formData.append('image',image)
        axios.post('src/assets/Code.jpeg',formData).then((res) =>{
            console.log(res);
        } )
    }


    return (
        <div className='pt-5 p-2 border-y border-slate-800  text-white '>
            <div className='flex sticky p-3 gap-5 top-0'>
                <Allimage src="src/assets/Profile-Fill.svg" alt="Images du jour" />
                <textarea className='bg-black text-silver resize-none' placeholder='Whats happening' name="" id="" cols="50" rows="1"></textarea>
            </div>
            <div className=' flex justify-between'>
                <div className='flex gap-3 pt-8'>
                    <div for="avatar">
                        <label for="avatar">
                            <input type="file" onChange={toUpload} className="hidden" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                            <img src="src/assets/Media.svg" alt="" />
                        </label>
                    </div>
                    <All_icones src="src/assets/Gif.svg" />
                    <All_icones src="src/assets/Poll.svg" />
                    <All_icones src="src/assets/Emoji.svg" />
                    <All_icones src="src/assets/Schedule.svg" />
                </div>
                <div className='pt-8'>
                    <button onSubmit={handlerSubmit} className=' rounded-full w-20 bg-blue-500'>Tweet</button>
                </div>
            </div>
        </div>
    )
}