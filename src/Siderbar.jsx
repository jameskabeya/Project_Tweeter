import Myicones from "./Myicones"
import Private from "./Private"
import Mybutton from "./Button"
export default function Siderbar() {
    return (
        <div className='text-white pt-5 w-1/3'>
            <div id='Container_navbar' className='fixed '>
                <div>
                    <Myicones to='/Font' name="Font" src="src/assets/Twitter.svg" />
                    <Myicones to='/' name="Home" src="src/assets/Home-Fill.svg" />
                    <Myicones to='/notifications' name="Notifications" src="src/assets/Explore.svg" />
                    <Myicones to='/Messages' name="Messages" src="src/assets/Notifications-Fill.svg" />
                    <Myicones to='/Bookmarks' name="Bookmarks" src="src/assets/Bookmarks-Fill.svg" />
                    <Myicones to='/Lists' name="Lists" src="/src/assets/Lists-Fill.svg" />
                    <Myicones to='/profil' name="Profil" src="src/assets/Profile-Fill.svg" />
                    <Myicones to='/More' name="More" src="src/assets/More-2.svg" />
                    <Mybutton to='/Tweet' />
                    <Private to='/The News York Times' clase="w-10 rounded-3xl" src="src/assets/dan.jpeg" name="The News York Times" srce="src/assets/Private.svg" set="src/assets/More-2.svg" />
                </div>
            </div>
        </div>

    )
}