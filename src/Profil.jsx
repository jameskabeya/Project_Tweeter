import HomeBack from "./HomeBack"
import Allimage from "./Allimage"
import Who_Follow from "./Whoto_Follow"
import { Link } from "react-router-dom"
export default function Profil(props) {
    return (
        <div className="w-1/3 text-white border-x border-slate-800 border-b">
            <div>
                <HomeBack to='/' />
            </div>
            <div>
                <img className="h-80 w-full" src="src/assets/Code.jpeg" alt="" />
            </div>
            <div className="flex">
                <img className="w-40 h-40 -mt-20 rounded-full ml-8" src="src/assets/dan.jpeg" alt="" />
                <div>
                    <button className="text-white h-10 ml-80 mt-5 w-24 border rounded-3xl">Edit Profil</button>
                </div>
            </div>
            <div className="mt-10 ml-8">
                <h1>Bro James Kabeya</h1>
                <small>@bro_james64743</small>
                <div className="flex gap-2 mt-3">
                    <img src="src/assets/calendrier.png" alt="" />
                    <small>Joined juanary 2024</small>
                </div>
                <div className="gap-5 mt-3 flex">
                    <small><strong>2</strong> Following</small>
                    <small><strong>0</strong> Followers</small>
                </div>
            </div>
            <div className="flex justify-between p-3">
                <button><strong>Posts</strong></button>
                <button><strong>Replies</strong></button>
                <button><strong>Highlights</strong></button>
                <button><strong>Media</strong></button>
                <button><strong>Likes</strong></button>
            </div>
            <div className="border-t border-slate-800 h-60">
                <div>
                    <h2><strong>Let’s get you set up</strong></h2>
                </div>
                <div className="flex justify-between">
                    <div className="bg-yellow-500 w-24 h-24">
                        <div>
                            <img src="src/assets/plus.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-blue-500 w-24 h-24">
                        <div>
                            <img src="src/assets/messager.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-red-500 w-24 h-24">
                        <div>
                            <img src="src/assets/plus.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-green-500 w-24 h-24">
                        <div>
                            <img src="src/assets/plus.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-orange-500 w-24 h-24">
                        <div>
                            <img src="src/assets/plus.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-800">
                <div>
                    <p><strong>Who to Fallow</strong></p>
                </div>
            </div>
            <div>
                <Who_Follow src="src/assets/Profile-Photo(2).svg" name="HORIZON 24" names="Horizon_24" />
                <Who_Follow src="src/assets/Profile-Photo(2).svg" name="HORIZON 24" names="Horizon_24" />
                <Who_Follow src="src/assets/Profile-Photo(2).svg" name="HORIZON 24" names="Horizon_24" />
                <Who_Follow src="src/assets/Profile-Photo(2).svg" name="HORIZON 24" names="Horizon_24" />
                <Who_Follow src="src/assets/Profile-Photo(2).svg" name="HORIZON 24" names="Horizon_24" />
                <Who_Follow src="src/assets/Profile-Photo(2).svg" name="HORIZON 24" names="Horizon_24" />
                <Who_Follow src="src/assets/Profile-Photo(2).svg" name="HORIZON 24" names="Horizon_24" />
                <Who_Follow src="src/assets/Profile-Photo(2).svg" name="HORIZON 24" names="Horizon_24" />
            </div>
        </div>

    )
}