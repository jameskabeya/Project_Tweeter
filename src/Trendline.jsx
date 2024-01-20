import Myicones from "./Myicones"
import Setting from "./Setting"
import Onsitting from "./Onsitting"
import Search from "./Search"
import Followers from "./Followers"
export default function Trendline() {
    return (
        <div className='w-1/3 text-white p-3'>
            <div className='fixed'>
                <div className='border-boundell min-w-0'>
                    <Search />
                </div>
                <div className='bg-gray-900 min-w-full rounded-3xl mt-8 p-5'>
                    <div className='flex justify-between'>
                        <p><strong>TRENDS FOR YOU</strong></p>
                        <img src="src/assets/Settings.svg" alt="" />
                    </div>
                    <Myicones name="" src="" />
                    <Setting name="Trinding in Terky" src="src/assets/More-2.svg" />
                    <Onsitting name="#SQUID" names="2,066 twetts" />
                    <Myicones name="" src="" />
                    <Setting name="Trinding in Terky" src="src/assets/More-2.svg" />
                    <Onsitting name="#SQUID" names="2,066 twetts" /><Myicones name="" src="" />
                    <Setting name="Trinding in Terky" src="src/assets/More-2.svg" />
                    <Onsitting name="#SQUID" names="2,066 twetts" /><Myicones name="" src="" />
                    <Setting name="Trinding in Terky" src="src/assets/More-2.svg" />
                    <Onsitting name="#SQUID" names="2,066 twetts" />
                    <button><strong className='text-blue-400'>Show more</strong></button>
                </div>
                <div className='bg-gray-900 pt-10 rounded-3xl mt-8 p-3'>
                    <div>
                        <Followers src="src/assets/Profile-Photo(2).svg" name="The News York Times" srce="src/assets/Verified.svg" names="@nytimes" nam="Follow" />
                    </div>
                    <div className='mt-3'>
                        <Followers src="src/assets/Profile-Photo.svg" name="The News York Times" srce="src/assets/Verified.svg" names="@nytimes" nam="Follow" />
                    </div>
                    <div className='mt-3'>
                        <Followers src="src/assets/Profile-Photo(1).svg" name="The News York Times" srce="src/assets/Verified.svg" names="@nytimes" nam="Follow" />
                        <button className='mt-3'><strong className='text-blue-400'>Show more</strong></button>
                    </div>
                </div>
            </div>
        </div>
    )
}